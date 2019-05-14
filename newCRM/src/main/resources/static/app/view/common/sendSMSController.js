/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 독자 정보
 *  기능정의 :  Controller
 *  최초작성일 : 2019.02.12
 *  최종수정일 : 2019.02.12
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.common.sendSMSController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.sendsms',

    init: function ()
    { 
    },
    
    Save: function ( obj, eOpts )
    {
        var me = this.getView();
        var form = me.items.items[0].getForm();
        if ( form.isValid() )
        {
            var url = '/api/common/getSendSMS';
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
                    Ext.Msg.alert( '문자발송', '발송완료' );

                    me.destroy();
                },
 
                failure: function ( frm, action )
                { //실패시 로직, api호출 실패시 또는 예외 오류발생시
                    var result = Ext.decode( action.response.responseText );
                    Ext.Msg.alert( '문자발송', result.msg );

                }
            } );
        }
    },
    
    Close: function ( obj, eOpts )
    { 
        obj.up('window').destroy();
        
    } 
    
});
