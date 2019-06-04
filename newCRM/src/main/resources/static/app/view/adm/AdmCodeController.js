
Ext.define('hkCRM.view.adm.AdmCodeController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.AdmCode',
   
    init: function(){ 
    	
    	var frm = this;
    	
    	Ext.Ajax.request( {   //업무구분과 코드구분 콤보 조회
            url: '/api/Adm/getAdm1000',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },  
            jsonData: {
                loginID:loginID,
				sessionkey: sessionkey
            },
            success: function ( response, opts )
            { 
            	 var obj = Ext.decode( response.responseText ); 
                if ( obj.status == 'true' )
                {    
                    var obj = Ext.decode( response.responseText ); 
                   	frm.lookupReference('jobcls').getStore().loadData(obj.jobclsflist);    
                   	frm.lookupReference('cdcls').getStore().loadData(obj.cdclsflist);    
                }
                else
                {
                    Ext.Msg.alert( 'Failed', obj.errmsg, function () { return false; } );
                }
            },

            failure: function ( response, opts )
            {
                Ext.Msg.alert( 'System Error', response.status, function () { return false; } );
            }
        } );
    }, 
    
   onLoad: function(){
	   
   },
   
   findCode: function( combo, record, eOpts ){
	   var jobcode = record.data.JOB_CLSF;
	   this.lookupReference('cdcls').getStore().clearFilter();
	   this.lookupReference('cdcls').getStore().filter('JOB_CLSF', record.getData().JOB_CLSF)
	   
   },
   
   keyPress: function(obj,e,eOpts){
	   if (e.getKey() == e.ENTER)  this.searchRdr();
   },
   
   
   btnClick: function ( )
   {
	   var ccc;
	   Ext.Ajax.request
	   ( {   //업무구분과 코드구분 콤보 조회
	       url: '/api/Adm/getAdm1001',
	       method: 'POST',
	       headers: {
	           'Content-Type': 'application/json', 
	       },  
	       jsonData: {
	           loginID:loginID,
			   sessionkey: sessionkey
			   //jobcls: 
	       },
	       success: function ( response, opts )
	       { 
	       	 var obj = Ext.decode( response.responseText ); 
	           if ( obj.status == 'true' )
	           {    
	               var obj = Ext.decode( response.responseText ); 
	           }                
	           else
	           {
	               Ext.Msg.alert( 'Failed', obj.errmsg, function () { return false; } );
	           }
	       },
	
	       failure: function ( response, opts )
	       {
	           Ext.Msg.alert( 'System Error', response.status, function () { return false; } );
	       }
	   } );   	
   
   }

    
});
