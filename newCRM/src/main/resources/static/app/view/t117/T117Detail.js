/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 휴독
 *  기능정의 :  Form
 *  참조테이블 : T117(휴독)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.t117.T117Detail', {
    extend: 'Ext.form.Panel',
    xtype: 't117-detail',

    requires: [  
        'hkCRM.view.t117.T117DetailController'
    ],

    title: '휴독',
    controller: 'T117Detail',    
    scrollable:true, 
    layout: {
        type: 'column'
    }, 
    
    bodyPadding: 5,
    
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 70, 
        allowBlank:true,
        margin:'0 5 5 0',
        width:140
    },
    
    defaultType: 'textfield',
    
    items: [
    	{ xtype:'hiddenfield', name: 'loginID' },
    	{ xtype:'hiddenfield', name: 'loginNm'  },
    	{ xtype:'hiddenfield', name: 'sessionkey', value: sessionStorage.getItem("sessionkey") },
    	{  xtype: 'hiddenfield', name: 'ACCFLAG', value: 'I'  },  
    	{  xtype:'hiddenfield', name: 'USERFLAG', value: '30' }, 
    	{  xtype:'hiddenfield', name: 'REGNO' }, 
    	{  xtype:'hiddenfield', name: 'REGDT' }, 
    	{  xtype:'hiddenfield', name: 'BOCD'},
    	{  xtype:'hiddenfield', name: 'BOSEQ'}, 
    	{  xtype:'hiddenfield', name: 'RDR_NO'}, 
    	{  xtype:'hiddenfield', name: 'RDRNM'}, 
    	{  xtype:'hiddenfield', name: 'SUSPTODT2'}, 
    	{  xtype:'hiddenfield', name: 'SUSPFRDT2'}, 
    	{  xtype:'hiddenfield', name: 'DLVDT2'}, 
    	{  fieldLabel: '매체명',  xtype: 'combobox',  referencd:'MEDICD', name: 'MEDICD', width:180,
    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL',  readOnly: false,
		    minChars: 0, queryMode: 'local', typeAhead: true, 
    		store: {xtype:'Common'},
    		listeners: {
    	        select: 'onMediaChg'
    	    }
        },  
    	{  allowBlank:false, fieldLabel: '지국확인 ', xtype:'checkbox', name: 'BOCNFMYN' ,inputValue:'Y', width:100  },
    	{  allowBlank:false, fieldLabel: '상담원확인 ', xtype:'checkbox', name: 'CNS_EMPCNFMYN' ,inputValue:'Y', width:100  },
    	{  fieldLabel: '부수 ', name: 'QTY', xtype:'numberfield' , labelWidth:50, width:110, allowDecimals: false, readOnly:false},  
    	{  fieldLabel: '서비스선택',  xtype: 'combobox',  name: 'TEMP_STOPCLSFCD', width:180,
    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL',  readOnly: false,
		    minChars: 0, queryMode: 'local', typeAhead: true, 
    		store: {xtype:'Common'}
        }, 
    	{ fieldLabel: '배달일자', xtype:'datefield', name: 'DLVDT', format:'Ymd', width:160} ,
    	{  xtype: 'fieldcontainer',  fieldLabel: '신청기간',   layout: 'hbox', width:250,
            combineErrors: false,  defaultType: 'textfield', margin: '0 0 0 0', 
            defaults: {
                hideLabel: 'true'
            }, 
            items:[ 
            	{ fieldLabel: '시작일자', xtype:'datefield', name: 'SUSPFRDT', format:'Ymd', width:80} ,
            	{  xtype:'displayfield', value:'-' , width:5 },
            	{ fieldLabel: '종료일자', xtype:'datefield', name: 'SUSPTODT', format:'Ymd', width:80}  
            ]
    	},     
    	{ fieldLabel: '시작월분', name: 'BGNMAPPLI' , width:125} ,
    	{ fieldLabel: '종료월분',  name: 'ENDMAPPLI', width:125} ,
    	{ fieldLabel: '독자비고', xtype:'textarea',  width:380, name: 'REMK'} ,
    	{ fieldLabel: '지국비고', xtype:'textarea',  width:380,  name: 'BOREMK', readOnly:true} , 
    	{ fieldLabel: '상담원비고', xtype:'textarea',  width:380,  name: 'CNS_EMPREMK'} , 
    	{  
    		xtype:'button', reference: 'regBtn', text: '등록' , margin:'0 5 5 0',
    		handler: 'onSubmit'
    	},
    	{  
    		xtype:'button', reference: 'delBtn', text: '삭제' , margin:'0 5 5 0', hidden: true,
    		handler: 'onSubmit'
    	},
    	{  xtype:'button', text: '초기화', handler: 'onReset' }
    ],
    
    
    listeners: {
        select: 'onItemSelected'
    }
});