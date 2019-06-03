/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 자동이체
 *  기능정의 :  Controller
 *  참조테이블 : T212(신문구독), T212(자동이체신청)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.t212.T212ListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.T212List',

    init: function(){
    	var store = this.getView().getStore(); 
    	/*this.getView().getStore().load( { 
    		params:
					{   
						orderby:'02',
						search_sel:'07',
						search_nm:'025173271',
						suspyn:'Y'
	                 } ,
	         scope: this,
	         callback: function(records, operation, success) {
	             if (success) {
	            	 var obj = operation._response.responseJson;
	            	 if(obj ==undefined ){ //IE11 예외처리
	            		 obj = Ext.JSON.decode(operation._response.responseText)
	            	 }
	            	 if(obj.errmsg != null){Ext.Msg.alert('Failed', obj.errmsg);}   
	             } else {
	            	 var obj =operation.error;
	            	 Ext.Msg.alert('Failed', obj.statusText);
	             }
	         }
		});*/
    },
    
	onNameFilterKeyup: function(param1) {
        var grid = this.getView(),
            // Access the field using its "reference" property name.
            filterField = this.lookupReference(param1),
            filters = grid.store.getFilters();

        if (filterField.value) {
            this.nameFilter = filters.add({
                id            : param1,
                property      : param1,
                value         : filterField.value,
                anyMatch      : true,
                caseSensitive : false
            });
        } else if (this.nameFilter) {
            filters.remove(this.nameFilter);
            this.nameFilter = null;
        }
    },
    
    onCancle: function(view, recIndex, cellIndex, item, e, record) {    
		var msg = '해지 하시겠습니까?'; 
        sessionkey = sessionStorage.getItem("sessionkey");
        loginID = sessionStorage.getItem("loginID");
    	Ext.Msg.confirm('해지처리',msg, function(btn){
    		if(btn == 'yes'){  
    			Ext.Ajax.request( {  //
    	             url: '/api/rdr/getRdr1073',
    	             method: 'POST',
    	             headers: {
    	                 'Content-Type': 'application/json', 
    	             },  
    	             jsonData: {
    	                 bocd: hkCRM.config.Config.getTmBoCd() ,
    	                 rdr_no: record.get('RDR_NO') ,
    	                 medicd: record.get('MEDICD') ,
    	                 accflag: 'E' ,
						loginID:loginID,
						sessionkey: sessionkey
    	             },
    	             success: function ( response, opts )
    	             {
    	                 var obj = Ext.decode( response.responseText );
    	                 if ( obj.status == 'true' )
    	                 {    
    	                	 record.drop();
    	                	 var detail = Ext.getCmp('tmmain').lookupReference('t212').lookupReference('list');
    	                	 detail.getView().getStore().reload();
    	                	 Ext.Msg.alert( '해지처리', '처리완료' );
    	                 } else
    	                 {
    	                     Ext.Msg.alert( '해지처리', obj.errmsg );
    	                 }
    	             },

    	             failure: function ( response, opts )
    	             {
    	            	 var obj = operation.error.response.responseJson;
    	            	 if(obj ==undefined ){ //IE11 예외처리
    	            		 obj = Ext.JSON.decode(operation.error.response.responseText)
    	            	 }
    	            	 Ext.Msg.alert('Failed', obj.message);
    	             }
    	         } );
    		}
     });
}
    
  
    
});
