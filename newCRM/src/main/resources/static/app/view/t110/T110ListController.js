/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 민원조회
 *  기능정의 :  Controller
 *  참조테이블 : T110
 *  최초작성일 : 2019.02.13
 *  최종수정일 : 2019.02.13
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.t110.T110ListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.T110List',

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
