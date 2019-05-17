Ext.define('hkCRM.view.adm.AdmCode', {
    extend: 'Ext.window.Window', //'Ext.container.Viewport',
    alias: 'AdmCode',
    xtype: 'AdmCode',

    requires: [
        /*'adm1.view.MainViewViewModel',*/
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.view.Table',
        'Ext.grid.property.Grid',
        'hkCRM.view.adm.AdmCodeController'
    ],

/*    viewModel: {
        type: 'admcode'
    },*/
    itemId: 'AdmCode',
    layout: 'border',
    controller: 'AdmCode',  
    
    fieldDefaults: { 
        labelAlign: 'right',
        labelWidth: 60,
       //msgTarget: 'side' ,
        allowBlank:true,  
        margin: '0 5 5 0'
    },
    
    items: [
        {
            xtype: 'panel',
            region: 'north',
            splitterResize: false,
            height: 52,
            itemId: 'headerPanel',
            layout: 'table',
            title: '조회조건',
            dockedItems: [
                {
                    xtype: 'combobox',
                    name: 'jobcls', 
                    dock: 'left',
                    fieldLabel: '업무구분',
                    labelAlign: 'right',
                    labelWidth: 60,
            		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
        		    minChars: 0, queryMode: 'local', typeAhead: true, 
            		store: {xtype:'AdmCode'}
                },
                {
                    xtype: 'combobox',
                    dock: 'left',
                    fieldLabel: '코드구분',
                    labelAlign: 'right',
                    labelWidth: 60
                },
                {
                    xtype: 'textfield',
                    dock: 'left',
                    fieldLabel: '코드값',
                    labelAlign: 'right',
                    labelWidth: 50
                },
                {
                    xtype: 'textfield',
                    dock: 'left',
                    fieldLabel: '코드명',
                    labelAlign: 'right',
                    labelWidth: 50
                }
            ],
            items: [
                {
                    xtype: 'button',
                    text: '조회'
                },
                {
                    xtype: 'button',
                    text: '엑셀'
                }
            ]
        },
        {
            xtype: 'panel',
            flex: 1,
            region: 'west',
            split: true,
            itemId: 'leftPanel',
            width: 607,
            title: '코드목록',
            items: [
                {
                    xtype: 'gridpanel',
                    title: '',
                    columns: [
                        {
                            xtype: 'rownumberer'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'string',
                            text: '코드값'
                        },
                        {
                            xtype: 'numbercolumn',
                            width: 238,
                            dataIndex: 'string',
                            text: '코드명'
                        },
                        {
                            xtype: 'datecolumn',
                            dataIndex: 'string',
                            text: '약어'
                        },
                        {
                            xtype: 'booleancolumn',
                            dataIndex: 'string',
                            text: '항목1'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'string',
                            text: '항목2'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'panel',
            flex: 1,
            region: 'center',
            split: true,
            itemId: 'rightPanel',
            title: '상세내역',
            items: [
                {
                    xtype: 'propertygrid',
                    title: '',
                    source: {
                        'Property 1': 'String',
                        'Property 2': true,
                        'Property 3': '2019-05-16T14:19:25',
                        'Property 4': 123
                    }
                }
            ]
        }
    ]

});