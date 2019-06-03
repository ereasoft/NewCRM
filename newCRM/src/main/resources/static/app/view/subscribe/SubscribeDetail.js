/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 매체정보(결합독자인 경우 대표매체)
 *  기능정의 :  Form
 *  참조테이블 : T107,  T107N
 *  최초작성일 : 2019.02.12
 *  최종수정일 : 2019.02.12
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.subscribe.SubscribeDetail', {
    extend: 'Ext.form.Panel',
    xtype: 'subscribe-detail',

    requires: [  
        'hkCRM.view.subscribe.SubscribeDetailController'
    ],

    title: '결합독자',
    controller: 'SubscribeDetail',    
    scrollable:true, 
    layout: {
        type: 'column'
    },  
    fieldDefaults: { 
    	flex:1,
        labelAlign: 'right',
        labelWidth: 70, 
        allowBlank:true,
        readOnly:true, 
        width:160,
        margin:'0 5 5 0'
    },
    
    defaultType: 'textfield',
    
    items: [
         { xtype:'hiddenfield', fieldLabel: '독자정보', name: 'RDR_NO'  },
         { fieldLabel: '대표매체', name: 'RPTVMEDIyn', xtype:'checkbox', inputValue:'Y', width:90},
    	{  fieldLabel: '유료부수', name: 'VALQTY', xtype:'numberfield' , allowDecimals: false },
    	{  fieldLabel: '준유료부수', name: 'PRE_VALQTY' , xtype:'numberfield' , allowDecimals: false },
    	{  xtype:'numberfield', fieldLabel: '무료부수', name: 'NO_VALQTY', allowDecimals: false },
    	{  fieldLabel: '대표무료구분', name: 'RPTVFREECLSF' , xtype:'combobox', labelWidth: 80, width:170,
            		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
        		    minChars: 0, queryMode: 'local', typeAhead: true, 
            		store: {xtype:'Common'}
    	},  
    	{  fieldLabel: '구독금액', name: 'SUBSAMT', xtype:'numberfield'  , allowDecimals: false },
    	{  fieldLabel: '청구금액', name: 'REALSUBSAMT', xtype:'numberfield'  , allowDecimals: false }, 
    	{  fieldLabel: '할인금액', name: 'DSCNAMT', xtype:'numberfield'   , allowDecimals: false},
    	{  fieldLabel: '우송료', name: 'PDLVFEE', xtype:'numberfield'   , allowDecimals: false},
    	{  fieldLabel: '확장일자', name: 'RPTVEXTNDT', xtype:'datefield', format:'Ymd'   },
    	{  fieldLabel: '구독일자', name: 'RPTVSUBSDT', xtype:'datefield', format:'Ymd'   },
    	{ 
    		xtype:'combobox', fieldLabel: '수금방법', name: 'CLAMTMTHDCD' ,  
    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', width:200,
		    minChars: 0, queryMode: 'local', typeAhead: true, 
    		store: {xtype:'Common'},
        },
    	{  fieldLabel: '전월미수', name: 'UNRCPAMT' ,width:200},
    	{  fieldLabel: '유료월', name: 'RPTVVALMM' }, 
    	{ 
    		xtype:'combobox', fieldLabel: '확장유형', name: 'RPTVEXTNTYPE' ,  
    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
		    minChars: 0, queryMode: 'local', typeAhead: true, 
    		store: {xtype:'Common'},
        },
    	{  fieldLabel: '확장자', name: 'RPTVEXTNPERS'   },
    	{  fieldLabel: '이전일자', name: 'RPTVVALMM'   },
    	{  xtype: 'fieldcontainer',  fieldLabel: '중지일자',   layout: 'hbox',
            combineErrors: false, width:270,
            defaults: {
                hideLabel: 'true',
                allowBlank:true
            }, 
            items:[
            	{   xtype:'numberfield', fieldLabel: '중지일자', name: 'RPTVSUSPDT',  xtype:'datefield', format:'Ymd' ,width:80 },
            	{ 
            		 xtype:'combobox', fieldLabel: '사유', name: 'RPTVSUSPRESNCD' , width:100,
            		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
        		    minChars: 0, queryMode: 'local', typeAhead: true, 
            		store: {xtype:'Common'},
                } 
            ]
    	},   
    	{  fieldLabel: '분기', name: 'CLAMTCYCLCD'},
    	{ fieldLabel: '1년약정', name: 'ONEYEARYN', xtype:'checkbox'},
    	 
    ],
    
    
    listeners: {
       // select: 'onItemSelected'
    }
});