/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 이사
 *  기능정의 :  Controller
 *  참조테이블 : T501(이사독자)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.t501.T501DetailController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.T501Detail',

    init: function(){
    	 
    },
    
    findAddrDaum: function(e,target,eOpts){ 
    	var frm = this.getView().getForm();
    	var win = Ext.create("Ext.window.Window",{ 
    				height:600, width:500, modal : true, autoShow : false, titleAlign : 'center',  layout : 'fit',
    				items : [{ xtype: 'component', id : 'daum_address2' }] 
    	});
    	win.show(undefined,function(){ 
    		daum.postcode.load(function(){
    		new daum.Postcode({ oncomplete: function(data) { 
    			frm.findField("MOVMZONECODE").setValue(data.zonecode); 
    			frm.findField("MOVMADDR_DO").setValue(data.address+'('+data.buildingName+')');  
    			frm.findField("MOVMADDR").setValue(data.jibunAddress); 
    			frm.findField("MOVMZIPBLDGNUM").setValue(data.buildingCode);  
    			frm.findField("MOVMDTLSADDR").focus(); win.destroy(); 
    			}, 
    			width : '100%',
                height : '100%' 
                }).embed(Ext.get('daum_address2'));  
    		}); 
    	});

    },
    
    chgACPTBOCD: function(obj, newval, oldval, eOpts){ 
    	var frm = this.getView().getForm(); 
        var sessionkey = sessionStorage.getItem("sessionkey");
        var loginID = sessionStorage.getItem("loginID");
        
    	if(newval != null){
    		 Ext.Ajax.request( {  
                 url: '/api/common/getZip5Daum',
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json', 
                 },  
                 jsonData: {
                	 bldgnum: newval, 
					 loginID:loginID,
					 sessionkey: sessionkey
                 },
                 success: function ( response, opts )
                 {
                     var obj = Ext.decode( response.responseText );
                     if ( obj.status == 'true' )
                     {  
                    	 //지국정보
                    	 var reader = obj.bocd.split('|');
                    	 frm.findField('ACPTBOCD').setValue(reader[0]) ;
                    	 frm.findField('ACPTBONM').setValue(reader[1]) ;
                    	 frm.findField('ACPTBO_TEL').setValue(reader[3]+reader[4]+reader[5]) ;
                       

                     } else
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
    },
    
    onTellSMS: function(phoneType){
    	var phone = '';
	      switch(phoneType){ 
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
		      /*case 'RDRTEL': 
		    	  phone += (this.lookupReference('RDRTEL_NO1').getValue() == null) ? '' : this.lookupReference('RDRTEL_NO1').getValue();
		    	  phone += (this.lookupReference('RDRTEL_NO2').getValue() == null) ? '' : this.lookupReference('RDRTEL_NO2').getValue();
		    	  phone += (this.lookupReference('RDRTEL_NO3').getValue() == null) ? '' : this.lookupReference('RDRTEL_NO3').getValue();
		    	  break;
		      case 'RDRPTPH':
		    	  phone += (this.lookupReference('RDRPTPH_NO1').getValue() == null) ? '' : this.lookupReference('RDRPTPH_NO1').getValue();
		    	  phone += (this.lookupReference('RDRPTPH_NO2').getValue() == null) ? '' : this.lookupReference('RDRPTPH_NO2').getValue();
		    	  phone += (this.lookupReference('RDRPTPH_NO3').getValue() == null) ? '' : this.lookupReference('RDRPTPH_NO3').getValue();
		    	  break;*/
		      case 'BOTEL':
		    	  phone = (this.lookupReference('ACPTBO_TEL').getValue() == null) ? '' : this.lookupReference('ACPTBO_TEL').getValue()
	      }
	      
	      if(phone == '') {
	    	  Ext.Msg.alert('경고','전화번호가 없습니다.');
	    	  return false;
	      }
	      
	     if(OcxAppClient.IsConnect()== 0) OcxAppClient.Connect();
	     var rcvPhone = hkCRM.config.Util.fmStringFill(phone,20);
	     var sndPhone = hkCRM.config.Util.fmStringFill(sendPhone,20);
	     var sendMsg = '000490117' + rcvPhone + sndPhone;
	     OcxAppClient.SockSendMsg(sendMsg);
  	
  },
  
  onSubmit: function(btn) {  
   
  	    	var list = this.getView().up().items.items[0];
  	    	var detail = this.getView();
  			var form = this.getView().getForm();
  			var msg = '등록을 하시겠습니까?';
  			if(btn.getText() == '삭제'){
  				 form.findField('ACCFLAG').setValue('D');
  				 msg = '삭제를 하시겠습니까?';
  			}else if(btn.getText() == '수정'){
  				msg = '수정을 하시겠습니까?';
  			}
  	    	Ext.Msg.confirm('이사처리',msg, function(btn){
  	    		if(btn == 'yes'){  
  	    	        form.findField('RDR_NO').setValue(hkCRM.config.Config.getTmRdrNo());   
  	    	        form.findField('RDRNM').setValue(hkCRM.config.Config.getTmRdrNm());    
  	    	        form.findField('MOVEDT2').setValue(form.findField('MOVEDT').getRawValue());
  	    	        form.findField('DLVHOPEDT2').setValue(form.findField('DLVHOPEDT').getRawValue());
  	    	      form.findField('loginID').setValue(loginID);
  	        	form.findField('loginNm').setValue(loginNm);
  	        	
  	        	
  	    	        var params = form.getValues();
  	    	        
  	    			    	if ( form.isValid() )
  	    			        {
  	    			            var url = '/api/rdr/getRdr1043';
  	    			            form.setConfig( {
  	    			                'url': url,
  	    			                'jsonSubmit': true
  	    			            } );
  	    			            jsonSubmit: true
  	    			            form.submit( {
  	    			                waitMsg: 'Processing...',
  	    			                method: 'POST',
  	    			                //headers: { 'Content-Type': 'multipart/form-data; charset=UTF-8' },
  	    			                params: params,
  	    			                submitEmptyText: false,
  	    			
  	    			                success: function ( frm, action )
  	    			                { //처리성공시 로직 추가, 정상적으로 리터된 경우 모두 포함 
  	    			                    var result = Ext.decode( action.response.responseText );
  	    			                    //frm.findField( 'quota_no' ).setValue( result.data.quota_no ); 
  	    			                    Ext.Msg.alert( '이사처리', '처리완료' );
  	    			                   detail.lookupReference('regBtn').setText('등록');
	    			                    detail.lookupReference('delBtn').setHidden(true) ;
	    			                    if(frm.findField('ACCFLAG').getValue() == 'D')  frm.reset();
	    			            		frm.findField('ACCFLAG').setValue('I');   
	    			                    list.getStore().reload();
  	    			
  	    			
  	    			                },
  	    			                failure: function ( frm, action )
  	    			                { //실패시 로직, api호출 실패시 또는 예외 오류발생시
  	    			                    var result = Ext.decode( action.response.responseText );
  	    			                    Ext.Msg.alert( '이사처리', result.errmsg );
  	    			
  	    			                }
  	    			            } );
  	    			          }
  	    		}
  	    	});
  },
  
  onReset: function(){
		var frm = this.getView().getForm(); 
		this.getView().lookupReference('regBtn').setText('등록');
		this.getView().lookupReference('delBtn').setHidden(true) ;
		frm.reset();
		frm.findField('ACCFLAG').setValue('I');   
	} 
    
});
