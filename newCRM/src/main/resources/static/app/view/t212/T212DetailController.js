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
    		Ext.TaskManager.stop(arsTask);
    		count = 0;
    		obj.setValue(''); 
    },
    
    arsWatch : function(inforkey, wav) {     
    	if(count > 0) return false; 
    	var chkmsg = this.getView().getForm().findField('msg');
    	if(arsFlag == false) return false;   
    	count += 1;
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
                        arsFlag == false;
                        arsYn = 'Y';
                        arsKey = inforkey;
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
		var phone = '' ;
		var frm = this.getView().getForm();
		phone += (this.lookupReference('PYMTTEL1').getValue() == null) ? '' : this.lookupReference('PYMTTEL1').getValue();
  	    phone += (this.lookupReference('PYMTTEL2').getValue() == null) ? '' : this.lookupReference('PYMTTEL2').getValue();
  	    phone += (this.lookupReference('PYMTTEL3').getValue() == null) ? '' : this.lookupReference('PYMTTEL3').getValue();
	
  	    var inforkey = Ext.Date.format(new Date(), 'YmdHis');
		var wav = 'N-' + inforkey.substr(0,8) + '-' + inforkey.substr(8,6) + '-' + phone + '.wav';
		var bankcd = frm.findField('BANKCD').getValue();
		var acct = frm.findField('ACCTNO').getValue();
		acct = acct.substr(acct.length-3.4);
	    var tk = inforkey.substr(12,2) ;
	    tk = '90';
	    var bd = frm.findField('PRN').getValue();
	    var arsinfo = bankcd + '|'  + acct + '|'  + tk + '|'  + bd + '|'  
	    
	    var me = this; 
	
	    arsTask = {
		    run: function(){Ext.getCmp('T212Detail').getController().arsWatch(inforkey,wav)},
		    interval: 1000
		}; 
		wsARS(wav,arsinfo);
		Ext.TaskManager.start(arsTask);
	},
	
	onTellSMS: function(phoneType){
    	var phone = '';
	      switch(phoneType){
		      case 'PYMTTEL': 
		    	  phone += (this.lookupReference('PYMTTEL1').getValue() == null) ? '' : this.lookupReference('PYMTTEL1').getValue();
		    	  phone += (this.lookupReference('PYMTTEL2').getValue() == null) ? '' : this.lookupReference('PYMTTEL2').getValue();
		    	  phone += (this.lookupReference('PYMTTEL3').getValue() == null) ? '' : this.lookupReference('PYMTTEL3').getValue();
		    	  break;
		      case 'RDRPTPH':
		    	  phone += (this.lookupReference('RDRPTPH_NO1').getValue() == null) ? '' : this.lookupReference('RDRPTPH_NO1').getValue();
		    	  phone += (this.lookupReference('RDRPTPH_NO2').getValue() == null) ? '' : this.lookupReference('RDRPTPH_NO2').getValue();
		    	  phone += (this.lookupReference('RDRPTPH_NO3').getValue() == null) ? '' : this.lookupReference('RDRPTPH_NO3').getValue();
		    	  break;
		      case 'BOTEL':
		    	  phone = (this.lookupReference('BOTELNO').getValue() == null) ? '' : this.lookupReference('BOTELNO').getValue()
	      }
	      
	      if(phone == '') {
	    	  Ext.Msg.alert('경고','전화번호가 없습니다.');
	    	  return false;
	      }
	      
	      var win = Ext.create( "hkCRM.view.common.sendSMS", {
              title: '문자발송', height: 300, width: 300, modal: true, autoShow: false, titleAlign: 'center', layout: 'fit',
              closable: false
          } );
          var form = win.items.items[0].getForm();
          form.findField( 'phone' ).setValue( phone );  
          win.show();
	      
    },
    
    onTellCall: function(phoneType){
	      var phone = '';
	      switch(phoneType){
	      case 'PYMTTEL': 
	    	  phone += (this.lookupReference('PYMTTEL1').getValue() == null) ? '' : this.lookupReference('PYMTTEL1').getValue();
	    	  phone += (this.lookupReference('PYMTTEL2').getValue() == null) ? '' : this.lookupReference('PYMTTEL2').getValue();
	    	  phone += (this.lookupReference('PYMTTEL3').getValue() == null) ? '' : this.lookupReference('PYMTTEL3').getValue();
	    	  break;
	      case 'RDRPTPH':
	    	  phone += (this.lookupReference('RDRPTPH_NO1').getValue() == null) ? '' : this.lookupReference('RDRPTPH_NO1').getValue();
	    	  phone += (this.lookupReference('RDRPTPH_NO2').getValue() == null) ? '' : this.lookupReference('RDRPTPH_NO2').getValue();
	    	  phone += (this.lookupReference('RDRPTPH_NO3').getValue() == null) ? '' : this.lookupReference('RDRPTPH_NO3').getValue();
	    	  break;
		      case 'BOTEL':
		    	  phone = (this.lookupReference('BOTELNO').getValue() == null) ? '' : this.lookupReference('BOTELNO').getValue()
	      }
	      
	      if(phone == '') {
	    	  Ext.Msg.alert('경고','전화번호가 없습니다.');
	    	  return false;
	      }
	      
	    /* if(OcxAppClient.IsConnect()== 0) OcxAppClient.Connect();
	     var rcvPhone = hkCRM.config.Util.fmStringFill(phone,20);
	     var sndPhone = hkCRM.config.Util.fmStringFill(sendPhone,20);
	     var sendMsg = '000490117' + rcvPhone + sndPhone;
	     OcxAppClient.SockSendMsg(sendMsg);*/
	      wsSend(phone);
    	
    },
    
    onSubmit: function() {    
		var msg = '계좌자동이체신청을 하시겠습니까?'; 
		var form = this.getView().getForm(); 
		form.findField('rdr_no').setValue(arsKey);
		form.findField('ARSKEY').setValue(arsKey);
		form.findField('MEDICD').setValue(hkCRM.config.Config.getTmMediaCd());
    	Ext.Msg.confirm('계좌자동이체 신청',msg, function(btn){
    		if(btn == 'yes'){  
    			if ( form.isValid() )
    	        {
    	            var url = '/api/rdr/getRdr1073'; 
    	            form.setConfig( {
    	                'url': url,
    	                'jsonSubmit': true
    	            } );
    	            jsonSubmit: true
    	            form.submit( {
    	                waitMsg: 'Processing...',
    	                method: 'POST', 
    	                params: form.getValues(),
    	                submitEmptyText: false,

    	                success: function ( frm, action )
    	                { //처리성공시 로직 추가, 정상적으로 리터된 경우 모두 포함 
    	                    var result = Ext.decode( action.response.responseText );
    	                    //frm.findField( 'quota_no' ).setValue( result.data.quota_no );
    	                    Ext.Msg.alert( '계좌자동이체신청', '신청완료' );


    	                },
    	                failure: function ( frm, action )
    	                { //실패시 로직, api호출 실패시 또는 예외 오류발생시
    	                    var result = Ext.decode( action.response.responseText );
    	                    Ext.Msg.alert( '계좌자동이체신청', result.errmsg ); 
    	                }
    	            } );
    	          }
    		}
     });
}
    
});
