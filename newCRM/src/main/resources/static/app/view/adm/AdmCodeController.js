
Ext.define('hkCRM.view.adm.AdmCodeController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.AdmCode',
   
    init: function(){ 
    	
    	var aaa ;
        this.lookupReference('jobcls2').getStore().load( { 
         		params:
     					{   
	       					loginID:loginID,
	       					sessionkey: sessionkey
     	                 } ,
     	        url:'/api/Adm/getAdm1000', 
     	         callback: function(records, operation, success) {
     	             if (success) {
     	            	 var obj = operation._response.responseJson;
     	            	 if(obj ==undefined ){ //IE11 예외처리
     	            		 obj = Ext.JSON.decode(operation._response.responseText)
     	            	 }
     	            	 if(obj.errmsg != null){Ext.Msg.alert('Failed', obj.errmsg);}   
     	             } else {
     	            	 var obj = operation.error.response.responseJson
   	            	 if(obj ==undefined ){ //IE11 예외처리
   	            		 obj = Ext.JSON.decode(operation.error.response.responseText)
   	            	 }
   	            	 Ext.Msg.alert('Failed', obj.message);
     	             }
     	         }
     		}); 

/*    	Ext.Ajax.request( {   //업무구분과 코드구분 콤보 조회
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
                   	// var frm = this.items.items[0].getForm();
                
                   	this.lookupReference('jobcls').getStore().loadData(obj.jobclsflist);    
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
        } );*/
    	
    	
    }, 
    
   onLoad: function(){
	   
   },
   
   keyPress: function(obj,e,eOpts){
	   if (e.getKey() == e.ENTER)  this.searchRdr();
   },
   
   
   btnClick: function ( )
   {
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
