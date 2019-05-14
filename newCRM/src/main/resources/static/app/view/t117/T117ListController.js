/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 구독계약조회
 *  기능정의 :  Controller
 *  참조테이블 : T117(휴독)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.t117.T117ListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.T117List',

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
    }
    
  
    
});
