/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 구독계약정보
 *  기능정의 :  Form
 *  참조테이블 : T111(신문구독), T112(신문구독계약)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.t111.T111Detail', {
    extend: 'Ext.form.Panel',
    xtype: 't111-detail',

    requires: [  
        'hkCRM.view.t111.T111DetailController'
    ],

    title: '구독정보',
    controller: 'T111Detail',    
    scrollable:true, 
    layout: {
        type: 'column'
    }, 
    
    bodyPadding: 10,
    
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 55,
        msgTarget: 'side' ,
        allowBlank:true,
        margin:'0 5 5 5',
        width:150
    },
    
    defaultType: 'textfield',
    
    items: [ 
    	{ xtype:'hiddenfield', name: 'RDR_NO'  },
    	{ xtype:'hiddenfield', name: 'sessionkey', value: sessionStorage.getItem("sessionkey") },
    	{ xtype:'hiddenfield', name: 'loginID', value: sessionStorage.getItem("loginID") },
    	{  allowBlank:false, fieldLabel: '매체명', xtype:'combo', name: 'MEDICD' ,reference: 'MEDICD',
    	   publishes: 'selection.data.MANGITEM1',  displayField: 'CDNM', valueField: 'CDVAL', width:200,
		   minChars: 0, queryMode: 'local', typeAhead: true, 
    	   store: {xtype:'Common'},
    	   listeners: {
   		       change: 'changeSubsuprc'
   		    }
    	},
    	{  allowBlank:false, fieldLabel: '구독부수', xtype:'numberfield' , allowDecimals: false, name: 'SUBSQTY'  },
    	{  fieldLabel: '구독단가', xtype:'numberfield' , allowDecimals: false, name: 'SUBSUPRC' ,
    		reference: 'SUBSUPRC' 
    	}, 
    	{  fieldLabel: '유료월', name: 'VALMM'  }, 
    	{ fieldLabel: '구독구분', xtype:'combo', name: 'FREEYN',
    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', width:200,
   		   minChars: 0, queryMode: 'local', typeAhead: true, 
       	   store: {
	       		fields: ['CDNM', 'CDVAL'],
	            data: [
	                { 'CDNM': '무료' , 'CDVAL':'Y'}, 
	                { 'CDNM': '유료' , 'CDVAL':'N'}
	            ],
	            proxy: { type: 'memory', reader: { type: 'json' } }
       	   },
    	} ,
    	{ fieldLabel: '무료구분', xtype:'combo', name: 'FREECLSF',
    	   publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', width:200,
  		   minChars: 0, queryMode: 'local', typeAhead: true, 
      	   store: {xtype:'Common'},
    	} ,
    	{  fieldLabel: '할인금액', xtype:'numberfield' , allowDecimals: false, name: 'DSCNAMT'  },  
    	{ fieldLabel: '수금방법', xtype:'combo', name: 'CLAMTMTHDCD',
    		 publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', width:200,
    		   minChars: 0, queryMode: 'local', typeAhead: true, 
        	   store: {xtype:'Common'},
    	} , 
    	{ fieldLabel: '확장일자',  name: 'EXTNDT', xtype:'datefield', format:'Ymd'} ,
    	{ fieldLabel: '확장우형', xtype:'combo', name: 'EXTNTYPECD',
    		 publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', width:200,
  		   minChars: 0, queryMode: 'local', typeAhead: true, 
      	   store: {xtype:'Common'},
    	} ,
    	{ fieldLabel: '확장자',  name: 'EXTNPERSNM'} ,
    	{ fieldLabel: '분기월',  name: 'CLAMTCYCLCD'} , 
    	{ fieldLabel: '구독일자',  name: 'SUBSFRDT', xtype:'datefield', format:'Ymd'} , 
    	{ fieldLabel: '우송료',  xtype:'numberfield' , allowDecimals: false, name: 'PDLVFEE'} ,
    	{  xtype:'button', text: '등록' , margin:'0 5 0 0' },
    	{  
    		xtype:'button', text: '초기화' ,
    		handler: 'frmReset'
    	}
    ],
    
    
    listeners: {
       // select: 'onItemSelected'
    }
});