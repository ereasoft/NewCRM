/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 독자 조회
 *  기능정의 :  Controller
 *  최초작성일 : 2019.02.11
 *  최종수정일 : 2019.02.11
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.rdr.RdrListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.RdrList',
   
    init: function(){ 
    	var sRDRCLSF = this.lookupReference('sRDRCLSF');
    	var SEARCH_SEL =  this.lookupReference('SEARCH_SEL');
    	var SEARCH_NM =  this.lookupReference('SEARCH_NM');
        var sessionkey = sessionStorage.getItem("sessionkey");
        var loginID = sessionStorage.getItem("loginID");
    	sRDRCLSF.setValue('');
    	SEARCH_SEL.setValue('01'); 
        
        //if(tm_flag == true)	{  //tm모드 일 경우에만 동작
	    	var phoneCall = function() {    
	    		//Ext.toast('<h4><b>수신대기</h4>');
	    		if(callPhone.length > 4 ){
	    			Ext.toast('<h4><b>[' + callPhone +']</b><p>전화가 왔습니다. </h4>');
	    			 var me = Ext.getCmp('rdrlist');
	    			 var store = me.getStore();  
	    			var phone = callPhone;
	    			SEARCH_SEL.setValue('01'); 
	    			SEARCH_NM.setValue(phone);
	    			callPhone = '';
	            	store.load( { 
	            		params:
	        					{   
	        						orderby:'02',
	        						search_sel:'07',
	        						search_nm:phone,
	        						suspyn:'Y', 
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
	        	            	 if(obj.errmsg != null){Ext.Msg.alert('Failed', obj.errmsg);}   
	        	            	 
	        	            	 if(records.length == 1)
			            		 {
			            		 var target = me.up(); 
			            		 target.getController().onItemSelected(target.getViewModel(),records[0],0,null); 
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
    		
    	};

    	var task = Ext.TaskManager.start({
    	    run: phoneCall,
    	    interval: 1000
    	});
       // }
    }, 
    
   onLoad: function(){
	   
   },
   
   keyPress: function(obj,e,eOpts){
	   if (e.getKey() == e.ENTER)  this.searchRdr();
   },
   
   renderColor: function(value, eOpts)
   {
	   if(eOpts.record.get('SUSPYN') == 'Y') return '<span style=" color:blue;">'+ value +'</span>'
	   if(eOpts.record.get('ENDCNT') < 0) return '<span style=" color:red;">'+ value +'</span>'
	   return value;
   },
   
   searchRdr: function() {
	   var me = Ext.getCmp('rdrlist');
	   var store = me.getStore();  
	   var rdrclsf  = this.lookupReference('sRDRCLSF').getValue();
       var search_sel = this.lookupReference('SEARCH_SEL').getValue();
       var search_nm = this.lookupReference('SEARCH_NM').getValue();
       var search_pttn = hkCRM.config.Util.chkSearchPttn(search_nm);
       var sessionkey = sessionStorage.getItem("sessionkey");
       var loginID = sessionStorage.getItem("loginID");
       
       if(search_nm == '') {
    	   Ext.Msg.alert('확인', '검색어를 입력하세요.');
    	   return false;
       }
       
	   	store.load( { 
	   		params:
						{   
							orderby: '02',
							rdrclsf: rdrclsf,
							search_pttn: search_pttn,
							search_sel: search_sel,
							search_nm: search_nm,
							suspyn:'Y',
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
		            	 if(obj.errmsg != null){Ext.Msg.alert('Failed', obj.errmsg);}     
		            	 if(records.length == 1)
		            		 {
		            		 var target = me.up();
		            		 
		            		 target.getController().onItemSelected(target.getViewModel(),records[0],0,null); 
		            		 }
	            		 //Ext.getCmp('rdrlist').fireEvent('select',Ext.getCmp('rdrlist'));
		             } else { 
		            	 var obj = operation.error.response.responseJson
    	            	 if(obj ==undefined ){ //IE11 예외처리
    	            		 obj = Ext.JSON.decode(operation.error.response.responseText)
    	            	 } 
		            	 Ext.Msg.alert( 'Failed', obj.message, function () { return false; } ); 
		             }
		         }
			}); 
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
    
    resetItems: function(){  //화면 초기화
    	var main = Ext.getCmp('tmmain');//lookupReference('t110List').getView().getStore().
    	var rdrgrp = main.lookupReference('rdrgroup');
    	//독자조회
    	rdrgrp.lookupReference('rdrlist').lookupReference('SEARCH_NM').setValue('');
    	rdrgrp.lookupReference('rdrlist').getView().getStore().removeAll(); 
    	
    	//독자정보
    	rdrgrp.lookupReference('detail').getForm().reset();
    	//기타정보
    	rdrgrp.lookupReference('etc').getForm().reset();
    	//매체정보
    	rdrgrp.lookupReference('medias').removeAll();
    	//구독처
    	rdrgrp.lookupReference('infra').getForm().reset();
    	//민원내역
    	main.lookupReference('t110List').getView().getStore().removeAll();
    	main.lookupReference('t110Detail').getForm().reset();
    	//수금내역 
    	main.lookupReference('t114').lookupReference('list').lookupReference('tbar').down('[name=brfcur]').setValue('');
    	main.lookupReference('t114').lookupReference('list').lookupReference('tbar').down('[name=brfcur2]').setValue('');
    	main.lookupReference('t114').lookupReference('list').lookupReference('tbar').down('[name=clamt]').setValue(''); 
    	main.lookupReference('t114').lookupReference('list').getView().getStore().removeAll();
    	main.lookupReference('t114').lookupReference('detail').getForm().reset();
    	//구독추가
    	main.lookupReference('t111').lookupReference('list').getView().getStore().removeAll();
    	main.lookupReference('t111').lookupReference('detail').getForm().reset();
    	//중지
    	main.lookupReference('t112').lookupReference('list').getView().getStore().removeAll();
    	main.lookupReference('t112').lookupReference('detail').getForm().reset();
    	main.lookupReference('t112').lookupReference('detail').lookupReference('t112MdList').getView().getStore().removeAll();
    	//이사
    	main.lookupReference('t501').lookupReference('list').getView().getStore().removeAll();
    	main.lookupReference('t501').lookupReference('detail').getForm().reset();
    	//이체신청
    	main.lookupReference('t212').lookupReference('list').getView().getStore().removeAll();
    	main.lookupReference('t212').lookupReference('detail').getForm().reset();
    	//휴독
    	main.lookupReference('t117').lookupReference('list').getView().getStore().removeAll();
    	main.lookupReference('t117').lookupReference('detail').getForm().reset();
    },

    mergeDlvd: function(value,operation,record){
    	var result = '';
    	if(record.get('DLVDSTCCD')) result += record.get('DLVDSTCCD');
    	if(record.get('DLVNO')) result += '-' +  record.get('DLVNO');
    	if(record.get('DLVINTVNO')) result += '-' + record.get('DLVINTVNO');
    	return result;
    },
    
    mergeTel: function(value,operation,record){
    	var result = '';
    	if(record.get('RDRTEL_NO1')) result += record.get('RDRTEL_NO1');
    	if(record.get('RDRTEL_NO2')) result += '-' +  record.get('RDRTEL_NO2');
    	if(record.get('RDRTEL_NO3')) result += '-' + record.get('RDRTEL_NO3');
    	return result;
    },
    
    mergePh: function(value,operation,record){
    	var result = '';
    	if(record.get('RDRPTPH_NO1')) result += record.get('RDRPTPH_NO1');
    	if(record.get('RDRPTPH_NO2')) result += ' -' +  record.get('RDRPTPH_NO2');
    	if(record.get('RDRPTPH_NO3')) result += ' -' + record.get('RDRPTPH_NO3');
    	return result;
    },
    
    mergeAddr: function(value,operation,record){
    	var result = '';
    	if(record.get('DLVADDR')) result += record.get('DLVADDR');
    	if(record.get('DLVDTLSADDR')) result += '  ' +  record.get('DLVDTLSADDR'); 
    	return result;
    }
    
});
