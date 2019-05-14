/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 구독계약정보
 *  기능정의 :  Controller
 *  참조테이블 : T212(신문구독), T212(자동이체신청)
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.t212.T212DetailController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.T212Detail',

    init: function(){
    	 
    },
    
    chkMsg: function(obj, newValue, oldValue, eOpts) {
    	if(newValue.length > 0){
    		Ext.TaskManager.stop(arsTask);
    		obj.setValue('');
    	}
    },
    
    arsWatch : function(inforkey, wav) {     
    	var chkmsg = this.getView().getForm().findField('msg');
    	if(arsFlag == false) return false;  
    	chkmsg.setValue('인증체크');
    	arsFlag == false;
		if(arsOK == false ){  
			Ext.Msg.alert( 'Failed', arsMsg, function () { return false; } );
        }else{
        	Ext.Ajax.request( {   //인증성공시 ARS인증정보 등록까지 완료되어야만 인증완료
                url: '/api/common/insertArsRec',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },  
                jsonData: {
                	inforkey: inforkey,
                	wav: wav, 
                    loginID:loginID,
					sessionkey: sessionkey
                },
                success: function ( response, opts )
                { 
                	 var obj = Ext.decode( response.responseText ); 
                    if ( obj.status == 'true' )
                    {    
                    	//chkmsg.setValue('ARS인증완료');
                        arsFlag == false;
                    	 Ext.Msg.alert( 'Success', 'ARS인증완료', function () { return false; } );
                    } 
                    else
                    {
                    	//chkmsg.setValue('obj.errmsg'); 
                        Ext.Msg.alert( 'Failed', obj.errmsg, function () { return false; } );
                    }
                },

                failure: function ( response, opts )
                {
                    Ext.Msg.alert( 'System Error', response.status, function () { return false; } );
                }
            } );
        }
	
},
    
	onARSAuth: function(){
		var phone = '01090529105';
		var inforkey = Ext.Date.format(new Date(), 'YmdHis');
		var wav = 'N-' + inforkey.substr(0,8) + '-' + inforkey.substr(8,6) + '-' + phone + '.wav';
		var bankcd = '003';
		var acct = '1234';
	    var tk = inforkey.substr(12,2) ;
	    var bd = '730107';
	    var arsinfo = bankcd + '|'  + acct + '|'  + tk + '|'  + bd + '|'  
	    
	    var me = this; 
	
	    arsTask = {
		    run: function(){Ext.getCmp('T212Detail').getController().arsWatch(inforkey,wav)},
		    interval: 500
		}; 
		wsARS(wav,arsinfo);
		Ext.TaskManager.start(arsTask);
	}
    
});
