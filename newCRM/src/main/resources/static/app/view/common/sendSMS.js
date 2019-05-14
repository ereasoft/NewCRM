Ext.define( 'hkCRM.view.common.sendSMS', {
    extend: 'Ext.window.Window',
    xtype: 'sendsms',

    requires: [
        'hkCRM.view.common.sendSMSController'
    ],

    controller: 'sendsms',

    title: '문자보내기',
    frame: true, 
    reference: 'sendsms',
 
    bodyPadding: 0, 

    items: [
        {
            xtype: 'form',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'stretch'
            },
            fieldDefaults: { 
                labelAlign: 'right',
                labelWidth: 50, 
                allowBlank:false,  
                margin: '0 5 5 0'
            },
            items: [
                { xtype: 'textfield', reference: 'phone', name: 'phone', fieldLabel:'휴대폰' },
                { xtype: 'textareafield', reference: 'msg', name: 'msg', height:200, fieldLabel:'내용'  }, 
                { xtype: 'hiddenfield', reference: 'loginID', name: 'loginID', value: loginID}, 
            ]
        }
    ], 
     
    buttons: [{
        text: '발송',
        handler: 'Save'
    }, {
        text: '닫기',
        handler: 'Close'
    }]
} );