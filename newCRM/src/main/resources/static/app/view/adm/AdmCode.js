Ext.define('hkCRM.view.adm.AdmCode', {
    extend: 'Ext.window.Window', //'Ext.container.Viewport',
    alias: 'AdmCode1',
    xtype: 'AdmCode1',

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
        'hkCRM.view.adm.AdmCodeController',
        'hkCRM.store.AdmCode1001St'
        
    ],

/*    viewModel: {
        type: 'admcode'
    },*/
    itemId: 'AdmCode2',
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
                    reference: 'jobcls',
                    dock: 'left',
                    fieldLabel: '업무구분',
                    labelAlign: 'right',
                    labelWidth: 60,
            		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
<<<<<<< HEAD
        		    minChars: 0, queryMode: 'remote', typeAhead: true, 
            		store: {xtype:'AdmCodeSt'}
                },
                { 
            		 xtype:'combobox', fieldLabel: '업무구분', name: 'jobcls' , width:120,reference: 'jobcls2',
            		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
				    minChars: 0, queryMode: 'local', typeAhead: true, 
            		store: {xtype:'AdmCodeSt'}
=======
        		    minChars: 0, queryMode: 'local', typeAhead: true, 
            		store: {xtype:'AdmCode'},
            		listeners: {
                        select: 'findCode'
                    }
>>>>>>> branch 'master' of https://github.com/ereasoft/NewCRM.git
                },
                {
                    xtype: 'combobox',
                    name: 'cdcls', 
                    reference: 'cdcls',
                    dock: 'left',
                    fieldLabel: '코드구분',
                    labelAlign: 'right',
                    labelWidth: 60,
            		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
        		    minChars: 0, queryMode: 'local', typeAhead: true, 
            		store: {
            		    model: 'hkCRM.model.AdmCodeMd',

            		    proxy: {

            		        type: 'memory',
            		        //url:'/api/Adm/getAdm1000',
            		        reader: {
            		            type: 'json',
            		            rootProperty: 'jobcls'
            		        }
            		    },
            		}                	
                },
                {
                    xtype: 'textfield',
                    dock: 'left',
                    name: 'cdval', 
                    reference: 'cdval',
                    fieldLabel: '코드값',
                    labelAlign: 'right',
                    labelWidth: 50
                },
                {
                    xtype: 'textfield',
                    dock: 'left',
                    name: 'cdnm', 
                    reference: 'cdnm',
                    fieldLabel: '코드명',
                    labelAlign: 'right',
                    labelWidth: 50
                }
            ],
            items: [
                {
                    xtype: 'button',
                    text: '조회',
                    listeners: {
                        click: {
                           
                            fn: 'btnClick',
                           
                        }
                    }
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
                    store: {
<<<<<<< HEAD
                      //  type: 'AdmCode1001St'  
=======
                       // type: 'AdmCode1001St'  
>>>>>>> branch 'master' of https://github.com/ereasoft/NewCRM.git
                    },
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
                        '업무구분': '',
                        '코드구분': '',
                        '코드값': '',
                        '코드명': '',
                        '약어명': '',
                        '관리항목1': '',
                        '관리항목2': '',
                        '관리항목3': '',
                        '관리항목4': '',
                        '관리항목5': '',
                        '관리항목6': '',
                        '관리항목7': '',
                        '사용구분': '',
                        '비고': ''
                    }
                }
            ]
        }
    ]

});