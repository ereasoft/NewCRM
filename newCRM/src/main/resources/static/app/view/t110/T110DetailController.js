/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 민원정보
 *  기능정의 :  Controller
 *  참조테이블 : T110
 *  최초작성일 : 2019.02.13
 *  최종수정일 : 2019.02.13
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.t110.T110DetailController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.T110Detail',

    init: function(){
    	 
    },
    
	save: function(){
		var list = this.getView().up().items.items[0];
		var form = this.getView().getForm();
		form.findField('RDR_NO').setValue(hkCRM.config.Config.getTmRdrNo());
        form.findField('BOCD').setValue(hkCRM.config.Config.getTmBoCd());
        form.findField('loginID').setValue(loginID);
    	form.findField('loginNm').setValue(loginNm);
        
		    	if ( form.isValid() )
		        {
		            var url = '/api/t110/getCoAT110';
		            form.setConfig( {
		                'url': url,
		                'jsonSubmit': true
		            } );
		            jsonSubmit: true
		            form.submit( {
		                waitMsg: 'Processing...',
		                method: 'POST',
		                //headers: { 'Content-Type': 'multipart/form-data; charset=UTF-8' },
		                params: form.getValues(),
		                submitEmptyText: false,
		
		                success: function ( frm, action )
		                { //처리성공시 로직 추가, 정상적으로 리터된 경우 모두 포함 
		                    var result = Ext.decode( action.response.responseText );
		                    //frm.findField( 'quota_no' ).setValue( result.data.quota_no ); 
		                    Ext.Msg.alert( '민원정보', '처리완료' );
		                    list.getStore().reload();
		                    
		
		
		                },
		                failure: function ( frm, action )
		                { //실패시 로직, api호출 실패시 또는 예외 오류발생시
		                    var result = Ext.decode( action.response.responseText );
		                    Ext.Msg.alert( '민원정보', result.errmsg );
		
		                }
		            } );
		          }
	},
	
	reset: function(){
		var frm = this.getView().getForm();
		var nowdate = Ext.Date.format(new Date(),'Ymd');
		frm.reset();
		frm.findField('ACCFLAG').setValue('I');
		frm.findField('USERFLAG').setValue('30'); 
		frm.findField('ACPNPATHCD').setValue('30'); 
		frm.findField('ACPNDT').setValue(nowdate); 
	} 
    
});
