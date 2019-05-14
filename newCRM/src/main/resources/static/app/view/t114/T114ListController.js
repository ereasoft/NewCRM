/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 수금처리
 *  기능정의 :  Controller
 *  참조테이블 : T111(신문구독), T114(신문구독수금), T914(전사공통코드)
 *  최초작성일 : 2019.02.13
 *  최종수정일 : 2019.02.13
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.t114.T114ListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.T114List',

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
    
    onPrevMM: function(){
    	var tbar = this.lookupReference('tbar');
    	 var medicd = hkCRM.config.Config.getTmSelMediaCd();
    	 var basiyymm = tbar.down('[name=prevyymm]').getValue();
    	 this.onListUp(medicd, basiyymm );
    },
    
    onNextMM: function(){
    	var tbar = this.lookupReference('tbar');
   	    var medicd = hkCRM.config.Config.getTmSelMediaCd();
   	    var basiyymm = tbar.down('[name=nextyymm]').getValue();
        this.onListUp(medicd, basiyymm );
    },
    
    onListUp: function(medicd,basiyymm){
    	pl = Ext.getCmp('tmmain').lookupReference('t114');
        var sessionkey = sessionStorage.getItem("sessionkey");
        var loginID = sessionStorage.getItem("loginID");
    	
    	var detailFrm =pl.lookupReference('detail').getForm();
    	//pl.setTitle('['+newTab.title+']수금내역'); 
    	pl.lookupReference('list').getView().getStore().load( { 
    		params:
					{   
		    			bocd: hkCRM.config.Config.getTmBoCd(),
		                rdr_no: hkCRM.config.Config.getTmRdrNo(),
		                medicd: medicd,
		                basiyymm: basiyymm, 
						loginID:loginID,
						sessionkey: sessionkey
		                
	                 } ,
	         scope: this,
	         callback: function(records, operation, success) {
	             if (success) {
	            	 var obj = operation._response.responseJson;
	            	 if(obj ==undefined ){ //IE11 예외처리
	            		 obj = Ext.JSON.decode(operation._response.responseText)
	            	 } 
	            	 if(obj.errmsg != null)
	            	 {
	            		 Ext.Msg.alert('Failed', obj.errmsg);
	            	 }
	            	 else
	            	 {
	            		 if(records.length == 0) detailFrm.reset();
	            		 detailFrm.findField('CLAMTMTHDCD').getStore().loadData(obj.commcdcur1);
	            		 detailFrm.findField('RCPMCLSFCD').getStore().loadData(obj.commcdcur2); 
               
                          
	            		 
	            		 var tbar = pl.lookupReference('list').lookupReference('tbar');
	            		 var brfcur = '';
	            		 var brfcur2 = '';
	            		 var currYear = parseInt(obj.curryymm.substring(0,4));
	            		 var prevYear = currYear -1;
	            		 
	            		 for(var i=1;i<13;i++){
	            			 var mm = prevYear + Ext.String.leftPad(i,2,'0');
	            			 var existClamt = obj.brfcur.filter(function(item){return item.SUBSMAPPLI == mm});
	            			 if(existClamt.length  == 0) {
	            				 brfcur +=  '_';
	            			 }else{
	            				 brfcur +=  existClamt[0].CLAMTYNM;
	            			 } 
	            		 }
	            		 
	            		 for(var i=1;i<13;i++){
	            			 var mm = currYear + Ext.String.leftPad(i,2,'0');
	            			 var existClamt = obj.brfcur2.filter(function(item){return item.SUBSMAPPLI == mm});
	            			 if(existClamt.length  == 0) {
	            				 brfcur2 +=  '_';
	            			 }else{
	            				 brfcur2 +=  existClamt[0].CLAMTYNM;
	            			 } 
	            		 }
	            		 
	            		 var clamt = obj.unrcpamt;
	            		 tbar.down('[name=brfcur]').setValue(brfcur);
	            		 tbar.down('[name=brfcur2]').setValue(brfcur2);
	            		 tbar.down('[name=clamt]').setValue(clamt);
	            		 tbar.down('[name=medicd]').setValue(obj.medicd);
	            		 tbar.down('[name=prevyymm]').setValue(obj.prevyymm);
	            		 tbar.down('[name=nextyymm]').setValue(obj.nextyymm);
	            		 tbar.down('[name=curryymm]').setValue(obj.curryymm);
	            		 
	            	 }   
	             } else {
	            	 var obj = operation.error.response.responseJson
	            	 if(obj ==undefined ){ //IE11 예외처리
	            		 obj = Ext.JSON.decode(operation.error.response.responseText)
	            	 }
	            	 Ext.Msg.alert('Failed', obj.message);
	             }
	         }
		}); 
    }
    
  
    
});
