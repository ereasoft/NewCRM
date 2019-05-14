Ext.define( 'hkCRM.view.login.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'Login',
    requires: [
        'hkCRM.view.login.LoginController'
    ],
    controller: 'login',
    reference: 'Login', 
    layout: 'fit',
    items: [{
        xtype: 'window',
        itemId: 'loginwin',
        autoShow: true,
        closable: false,
        draggable: false,
        title: '한국경제 CRM',
        frame: true,
        width: 500,
        bodyPadding: 10,
        defaultType: 'textfield',
        reference: 'Login',
        layout: {
        	type: 'vbox',
            pack: 'start',
            align: 'stretch'
        },
        fieldDefaults:{
        	labelAlign: 'right'
        },
        items: [
            {
                xtype: 'panel',
                html: '<img src=\"resources/images/loginbg.png\" style=\"width:474;height:145px;\"/>',
                margin: '0 0 5 0'
                //fieldStyle: 'padding-right:20px', 
            },
            {
                allowBlank: false,
                fieldLabel: 'User ID',
                itemId: 'user',
                name: 'user',
                emptyText: 'user id'
            },
            {
                allowBlank: false,
                fieldLabel: 'Password',
                itemId: 'pass',
                name: 'pass',
                emptyText: 'password',
                inputType: 'password'
            },
            {
                xtype: 'fieldcontainer', layout: 'hbox',  defaults: { hideLabel: false },
                items: [
                	 {
                         xtype: 'checkbox',
                         flex:1,
                         fieldLabel: 'Remember me',
                         name: 'remember',
                         itemId: 'remember',
                         inputValue: 'Y'
                     },
                     {
                         xtype: 'checkbox',
                         flex:1,
                         fieldLabel: 'TM view',
                         itemId: 'tmview',
                         inputValue: 'Y'
                     }
                            ]
            } 
        ],

        buttons: [
            {
                text: 'Login',
                handler: 'onLogon'
            }
        ]
    }],

    initComponent: function ()
    {
        this.defaults = {
            anchor: '100%',
            labelWidth: 120
        };

        this.callParent();
    }
} );