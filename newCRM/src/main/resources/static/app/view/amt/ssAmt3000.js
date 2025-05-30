/*
 * File: app/view/ssAmt3000.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.6.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.6.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('hkCRM.view.amt.ssAmt3000', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ssamt3000',

    requires: [
        'hkCRM.view.amt.ssAmt3000ViewModel',
        'Ext.form.field.Date',
        'Ext.form.Label',
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.form.FieldSet',
        'Ext.form.field.Number'
    ],

    viewModel: {
        type: 'ssamt3000'
    },
    height: 250,
    width: 400,
    layout: 'border',

    items: [
        {
            xtype: 'panel',
            region: 'north',
            height: 74,
            title: '조회조건',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            items: [
                {
                    xtype: 'datefield',
                    width: 161,
                    fieldLabel: '신청일자',
                    labelAlign: 'right',
                    labelWidth: 60
                },
                {
                    xtype: 'label',
                    text: '~'
                },
                {
                    xtype: 'datefield',
                    width: 96,
                    fieldLabel: '',
                    labelAlign: 'right',
                    labelWidth: 60
                },
                {
                    xtype: 'combobox',
                    fieldLabel: '지국',
                    labelAlign: 'right',
                    labelWidth: 60,
//                    displayField: 'BONM',
//                    store: 'T714St',
//                    valueField: 'BOCD',
                    multiSelect: true
                },
                {
                    xtype: 'combobox',
                    width: 165,
                    fieldLabel: '검색조건',
                    labelAlign: 'right',
                    labelWidth: 60
                },
                {
                    xtype: 'textfield',
                    width: 116,
                    fieldLabel: ''
                },
                {
                    xtype: 'combobox',
                    width: 165,
                    fieldLabel: '구분',
                    labelAlign: 'right',
                    labelWidth: 60
                },
                {
                    xtype: 'button',
                    width: 72,
                    text: '조회'
                }
            ]
        },
        {
            xtype: 'gridpanel',
            region: 'center',
            split: true,
            title: '자동이체 승인오류 목록',
            split: true,
            bind: {
                store: '{ssAmt3001s}'
            },
            columns: [
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'id',
                    text: 'ID',
                    format: '00'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: '이체구분',
                    text: '이체구분'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: '지국명',
                    text: '지국명'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: '독자명',
                    text: '독자명'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: '납부자번호',
                    text: '납부자번호'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: '납부자명',
                    text: '납부자명'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: '전화번호',
                    text: '전화번호'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: '구역+배달',
                    text: '구역+배달'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: '구독주소',
                    text: '구독주소'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: '신청구분',
                    text: '신청구분'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: '전송여부',
                    text: '전송여부'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: '신청경로',
                    text: '신청경로'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: '매체',
                    text: '매체'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: '접수일자',
                    text: '접수일자',
                    format: 'Y-m-d'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: '이체시작월',
                    text: '이체시작월'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: '최초신청일',
                    text: '최초신청일',
                    format: 'Y-m-d'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: '금결원송신일',
                    text: '금결원송신일',
                    format: 'Y-m-d'
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'east',
            split: true,
            width: 374,
            layout: 'border',
            collapsible: true,
            title: '상세 내역',
            items: [
                {
                    xtype: 'fieldset',
                    region: 'center',
                    split: true,
                    layout: 'form',
                    collapsible: true,
                    title: '납부자 정보',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: '납부자명',
                            labelAlign: 'right',
                            labelWidth: 60
                        },
                        {
                            xtype: 'textfield',
                            width: 150,
                            fieldLabel: '납부자번호',
                            labelAlign: 'right',
                            labelWidth: 70
                        },
                        {
                            xtype: 'textfield',
                            width: 150,
                            fieldLabel: '은행명',
                            labelAlign: 'right',
                            labelWidth: 70
                        },
                        {
                            xtype: 'textfield',
                            width: 150,
                            fieldLabel: '계좌번호',
                            labelAlign: 'right',
                            labelWidth: 70
                        },
                        {
                            xtype: 'textfield',
                            width: 150,
                            fieldLabel: '통신사(이체핸드폰)',
                            labelAlign: 'right',
                            labelWidth: 70
                        },
                        {
                            xtype: 'textfield',
                            width: 150,
                            fieldLabel: '주민등록번호',
                            labelAlign: 'right',
                            labelWidth: 70
                        },
                        {
                            xtype: 'textfield',
                            width: 150,
                            fieldLabel: '카드사',
                            labelAlign: 'right',
                            labelWidth: 70
                        },
                        {
                            xtype: 'textfield',
                            width: 150,
                            fieldLabel: '오류사유',
                            labelAlign: 'right',
                            labelWidth: 70
                        },
                        {
                            xtype: 'datefield',
                            width: 150,
                            fieldLabel: '신청일자',
                            labelAlign: 'right',
                            labelWidth: 70
                        },
                        {
                            xtype: 'textfield',
                            width: 150,
                            fieldLabel: '이체시작월',
                            labelAlign: 'right',
                            labelWidth: 70
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    region: 'south',
                    split: true,
                    height: 243,
                    layout: 'form',
                    collapsible: true,
                    title: '구독 정보',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: '독자명',
                            labelAlign: 'right',
                            labelWidth: 60
                        },
                        {
                            xtype: 'textfield',
                            width: 150,
                            fieldLabel: '독자번호',
                            labelAlign: 'right',
                            labelWidth: 70
                        },
                        {
                            xtype: 'textfield',
                            width: 150,
                            fieldLabel: '구독매체',
                            labelAlign: 'right',
                            labelWidth: 70
                        },
                        {
                            xtype: 'textfield',
                            width: 150,
                            fieldLabel: '부수',
                            labelAlign: 'right',
                            labelWidth: 70
                        },
                        {
                            xtype: 'numberfield',
                            width: 150,
                            fieldLabel: '실구독금액',
                            labelAlign: 'right',
                            labelWidth: 70
                        },
                        {
                            xtype: 'textfield',
                            width: 150,
                            fieldLabel: '전화번호',
                            labelAlign: 'right',
                            labelWidth: 70
                        },
                        {
                            xtype: 'textfield',
                            width: 150,
                            fieldLabel: '구독주소',
                            labelAlign: 'right',
                            labelWidth: 70
                        },
                        {
                            xtype: 'textfield',
                            width: 150,
                            fieldLabel: '비고',
                            labelAlign: 'right',
                            labelWidth: 70
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    region: 'south',
                    split: true,
                    height: 152,
                    layout: 'absolute',
                    collapsible: true,
                    title: '지국 정보',
                    items: [
                        {
                            xtype: 'textfield',
                            x: 55,
                            y: 5,
                            width: 130,
                            fieldLabel: '주소',
                            labelAlign: 'right',
                            labelWidth: 60
                        },
                        {
                            xtype: 'textfield',
                            x: 190,
                            y: 5,
                            width: 65,
                            fieldLabel: '',
                            labelAlign: 'right',
                            labelWidth: 70
                        },
                        {
                            xtype: 'textfield',
                            x: 120,
                            y: 30,
                            width: 225,
                            fieldLabel: '',
                            labelAlign: 'right',
                            labelWidth: 70
                        },
                        {
                            xtype: 'textfield',
                            x: 120,
                            y: 55,
                            width: 225,
                            fieldLabel: '',
                            labelAlign: 'right',
                            labelWidth: 70
                        },
                        {
                            xtype: 'textfield',
                            x: 5,
                            y: 80,
                            width: 340,
                            fieldLabel: '관할지국정보',
                            labelAlign: 'right',
                            labelWidth: 110
                        },
                        {
                            xtype: 'textfield',
                            x: 5,
                            y: 105,
                            width: 340,
                            fieldLabel: '관할지국전화번호',
                            labelAlign: 'right',
                            labelWidth: 110
                        },
                        {
                            xtype: 'button',
                            x: 260,
                            y: 5,
                            text: '주소 찾기'
                        }
                    ]
                }
            ]
        }
    ]

});