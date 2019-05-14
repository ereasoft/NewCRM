/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 구독처(다부수처,인프라독자)
 *  기능정의 :  Form
 *  참조테이블 : T107,  T107N
 *  최초작성일 : 2019.02.12
 *  최종수정일 : 2019.02.12
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.infra.InfraDetail', {
    extend: 'Ext.form.Panel',
    xtype: 'infra-detail',

    requires: [  
        'hkCRM.view.infra.InfraDetailController'
    ],

    title: '구독처',
    controller: 'InfraDetail',    
    scrollable:true,
    
    layout: {
        type: 'column'
        /*columns: 6,
        tableAttrs: {
            style: {
                width: '100%'
            }
        }*/
    }, 
    
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 70,
        width:150,
        //msgTarget: 'side' ,
        readOnly:true,
        allowBlank:true,
        margin: '0 5 5 0'
    },
    
    defaultType: 'textfield',
    
    items: [ 
    	{ xtype:'hiddenfield', name: 'sessionkey', value: sessionStorage.getItem("sessionkey") },
    	{ xtype:'hiddenfield', name: 'loginID', value: sessionStorage.getItem("loginID") },
    	{  fieldLabel: '계약번호', name: 'COUP_NO'  ,width:210},
    	{  fieldLabel: '업체명', name: 'COMPNAME'  ,width:200 }, 
      	//  fieldLabel: '독자구분', name: 'rdr_no'  }, 
      	{ 
    		xtype:'combobox', fieldLabel: '독자성분', name: 'RDRGRAD' ,width:190,
    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
		    minChars: 0, queryMode: 'local', typeAhead: true, 
    		store: {xtype:'Common'},
        }, 
    	{ 
    		xtype:'combobox', fieldLabel: '계약구분', name: 'CLAMTMTHDCD' , 
    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
		    minChars: 0, queryMode: 'local', typeAhead: true, 
    		store: {xtype:'Common'},
        }, 
        { 
    		xtype:'combobox', fieldLabel: '계약매체', name: 'MEDICD'   ,width:180,
    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
		    minChars: 0, queryMode: 'local', typeAhead: true, 
    		store: {xtype:'Common'},
        },  
    	{  fieldLabel: '유가부수', xtype:'numberfield', name: 'VALQTY'  , allowDecimals: false ,width:150}, 
    	{  fieldLabel: '준유가부수', xtype:'numberfield', name: 'PRE_VALQTY'  , allowDecimals: false ,width:150 }, 
    	{  fieldLabel: '무가부수', xtype:'numberfield', name: 'NO_VALQTY'  , allowDecimals: false ,width:150 }, 
    	{  fieldLabel: '배달부수', xtype:'numberfield', name: 'DLVQTY'  , allowDecimals: false  ,width:150}, 
    	{  fieldLabel: '매출월', xtype:'datefield',name: 'SETMONTH' ,format: 'Ym' },
    	{  fieldLabel: '종료월',xtype:'datefield', name: 'SUBSTODT' ,format: 'Ym' },
      	{  fieldLabel: '계약기간',  name: 'TOT_MONTH'  } 
    ],
    
    
    listeners: {
       // select: 'onItemSelected'
    }
});