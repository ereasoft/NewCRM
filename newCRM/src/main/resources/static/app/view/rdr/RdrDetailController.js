/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 독자 정보
 *  기능정의 :  Controller
 *  최초작성일 : 2019.02.12
 *  최종수정일 : 2019.02.12
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.rdr.RdrDetailController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.RdrDetail',

    init: function(){
    	
    },
    
    afterRender:  function(){
    	
    },
    
    findAddrDaum: function(e,target,eOpts){ 
    	var frm = this.getView().getForm();
    	var win = Ext.create("Ext.window.Window",{ 
    				height:600, width:500, modal : true, autoShow : false, titleAlign : 'center',  layout : 'fit',
    				items : [{ xtype: 'component', id : 'daum_address' }] 
    	});
    	win.show(undefined,function(){ 
    		daum.postcode.load(function(){
    		new daum.Postcode({ oncomplete: function(data) { 
    			frm.findField("DLVZONECODE").setValue(data.zonecode); 
    			frm.findField("DLVADDR_DO").setValue(data.address+'('+data.buildingName+')'); 
    			frm.findField("DLVADDR").setValue(data.jibunAddress); 
    			frm.findField("DLVZIPBLDGNUM").setValue(data.buildingCode);  
    			frm.findField("DLVDTLSADDR").focus(); win.destroy(); }, 
    			width : '100%',
                height : '100%' 
                }).embed(Ext.get('daum_address'));  
    		}); 
    	});

    },
    
    onTellSMS: function(phoneType){
    	var phone = '';
	      switch(phoneType){
		      case 'RDRTEL': 
		    	  phone += (this.lookupReference('RDRTEL_NO1').getValue() == null) ? '' : this.lookupReference('RDRTEL_NO1').getValue();
		    	  phone += (this.lookupReference('RDRTEL_NO2').getValue() == null) ? '' : this.lookupReference('RDRTEL_NO2').getValue();
		    	  phone += (this.lookupReference('RDRTEL_NO3').getValue() == null) ? '' : this.lookupReference('RDRTEL_NO3').getValue();
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
		      case 'RDRTEL': 
		    	  phone += (this.lookupReference('RDRTEL_NO1').getValue() == null) ? '' : this.lookupReference('RDRTEL_NO1').getValue();
		    	  phone += (this.lookupReference('RDRTEL_NO2').getValue() == null) ? '' : this.lookupReference('RDRTEL_NO2').getValue();
		    	  phone += (this.lookupReference('RDRTEL_NO3').getValue() == null) ? '' : this.lookupReference('RDRTEL_NO3').getValue();
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
    
    rdrUpdate: function(){
    	var form = this.getView().getForm();
    	form.findField('loginID').setValue(loginID);
    	form.findField('loginNm').setValue(loginNm);
    	if ( form.isValid() )
        {
            var url = '/api/rdr/getRdr1004'; 
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
                    Ext.Msg.alert( '독자정보', '수정완료' );


                },
                failure: function ( frm, action )
                { //실패시 로직, api호출 실패시 또는 예외 오류발생시
                    var result = Ext.decode( action.response.responseText );
                    Ext.Msg.alert( '독자정보', result.errmsg );

                }
            } );
          }
    },
    
    onLogHis: function(){  //상세내역 조회시 처리토록 변경 - 사용않함
    	
    	var tooltip = this.tooltip;
    	var loginType = this.lookupReference('LOGINTYPE').getValue();
    	var userId = this.lookupReference('ONMBRID').getValue();
    	var target = this.lookupReference('ONMBRIDTYPE');
    	
    	if(loginType != ''){
    		Ext.Ajax.request( {  
                url: '/api/common/getDkhtLog',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },  
                jsonData: {
                	userid: userId ,
                	logintype: loginType,
                	rowcnt: 10
                },
                success: function ( response, opts )
                {
                    var obj = Ext.decode( response.responseText );
                    if ( obj.status == 'true' )
                    {  
                   	 //최근로그인 이력
                   	 var reader = obj.hiscur; 
                     var htmlStr= '<ul>';
                     var i = 0;
                     for(i=0;i<reader.length;i++){
                    	 htmlStr += '<li>'+reader[i].ACDT+'</li>';
                     }
                     htmlStr += '</ul>';
                     if (i > 0){
                    	 this .tooltip = new Ext.tip.ToolTip({
                             defaultAlign: 't-b',
                             target: target,
                             html: htmlStr,
                             minWidth: 300,
                             title: '최근 로그인이력',  
                             anchor: true,
                             autoShow: false,
                             autoHide: true,
                             closable: false
                         }); 
	                    // tooltip.getHtml(htmlStr);
	                    // this .tooltiptooltip.show();
                     }
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
    	
    }
    
  
    
    
});
