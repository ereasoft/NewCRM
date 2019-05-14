/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 수금정보
 *  기능정의 :  Form
 *  참조테이블 : T111(신문구독), T114(신문구독수금), T914(전사공통코드)
 *  최초작성일 : 2019.02.13
 *  최종수정일 : 2019.02.13
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.t114.T114Detail', {
    extend: 'Ext.form.Panel',
    xtype: 't114-detail',

    requires: [  
        'hkCRM.view.t114.T114DetailController'
    ],

    title: '수금정보',
    controller: 'T114Detail',    
    scrollable:true, 
    layout: {
        type: 'column'
    }, 
    
    bodyPadding: 10,
    
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 53, 
        readOnly: true,
        allowBlank:true,
        margin:'0 5 5 5',
        width:130
    },
    
    defaultType: 'textfield',
    
    items: [  
            	{ xtype:'hiddenfield', name: 'loginID'  },
            	{ xtype:'hiddenfield', name: 'loginNm'  },
            	{ xtype:'hiddenfield', name: 'sessionkey', value: sessionStorage.getItem("sessionkey") },
            	{  xtype: 'hiddenfield', name: 'ACCFLAG', value: '1'  },
            	{  xtype: 'hiddenfield', name: 'RDR_NO'},
            	{  xtype: 'hiddenfield', name: 'BOCD' }, 
            	{  xtype: 'hiddenfield', name: 'BOSEQ' },
            	{  xtype: 'hiddenfield', name: 'MEDICD' },
            	{  xtype: 'hiddenfield', name: 'RECPDT2' }, //날짜를 스트링으로 받아오기 위한 임시필드
		    	{  allowBlank:false, fieldLabel: '구독월분', name: 'SUBSMAPPLI'  },
		    	{  fieldLabel: '청구액', name: 'CLAMAMT',xtype:'numberfield' , allowDecimals: false   },  
		    	{  allowBlank:false, fieldLabel: '수금일자', xtype:'datefield', name: 'RECPDT' , readOnly: false, width:150, format:'Ymd',submitFormat:'Ymd',submitValue:true },
		    	{  fieldLabel: '수금액', name: 'CLAMT' ,xtype:'numberfield' ,  readOnly: false, allowDecimals: false  },  
		    	{  fieldLabel: '수금방법',  xtype: 'combobox',  name: 'CLAMTMTHDCD', width:180,
		    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL',  readOnly: false,
        		    minChars: 0, queryMode: 'local', typeAhead: true, 
            		store: {xtype:'Common'}
		        },
		        {  fieldLabel: '수금구분',  xtype: 'combobox',  name: 'RCPMCLSFCD', 
		    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL',  readOnly: false,
        		    minChars: 0, queryMode: 'local', typeAhead: true, 
            		store: {xtype:'Common'}
		        },
		    	{  xtype:'button', text: '수금처리', handler: 'onSubmit'}
    ],
    
    
    listeners: {
       // select: 'onItemSelected'
    }
});