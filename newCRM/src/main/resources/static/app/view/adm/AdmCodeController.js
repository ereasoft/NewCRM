
Ext.define('hkCRM.view.adm.AdmCodeController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.AdmCode',
   
    init: function(){ 

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
                   	 var frm = this.getform();
                
                   	 frm.findField('jobcls').getStore().loadData(obj.jobclsflist);    
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
   
   keyPress: function(obj,e,eOpts){
	   if (e.getKey() == e.ENTER)  this.searchRdr();
   },
   

    
});
