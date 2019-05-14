/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 중지
 *  기능정의 :  Form
 *  참조테이블 : T112(신문구독)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.t112.T112Detail', {
    extend: 'Ext.form.Panel',
    xtype: 't112-detail',

    requires: [  
        'hkCRM.view.t112.T112DetailController'
    ],

    title: '중지',
    controller: 'T112Detail',    
    scrollable:true, 
    layout:  'hbox' , 
    
    bodyPadding: 5,
    
    fieldDefaults: {
        labelAlign: 'top',  
        //margin:'5 5 5 5',
        width:100
    },
   
    defaults: {
        border: false,  
        layout: 'column'
    },
    
    
    items: [
	    {  xtype:'panel', width:120,  
	    	items: [
	    		{  xtype:'hiddenfield', name: 'BOCD' }, 
	    		{  xtype:'hiddenfield', name: 'BOSEQ' }, 
	    		{  xtype:'hiddenfield', name: 'RDR_NO' }, 
	    		{  xtype:'hiddenfield', name: 'MEDICD' }, 
	        	{  xtype:'hiddenfield', name: 'FREEYN' }, 
	        	{  xtype:'hiddenfield', name: 'FREECLSF' }, 
	        	{  xtype:'hiddenfield', name: 'QTY' },  
	        	{  xtype:'hiddenfield', name: 'SUSPDT2' },  
	        	{ xtype:'hiddenfield', name: 'loginID'  },
	        	{ xtype:'hiddenfield', name: 'loginNm' },
	        	{ xtype:'hiddenfield', name: 'sessionkey', value: sessionStorage.getItem("sessionkey") },
	    	{   fieldLabel: '중지유형', xtype:'combo', name: 'SUPTYPE',
	    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
	   		   minChars: 0, queryMode: 'local', typeAhead: true, 
	       	   store: {
		       		fields: ['CDNM', 'CDVAL'],
		            data: [
		                { 'CDNM': '부분중지' , 'CDVAL':'1'}, 
		                { 'CDNM': '전체중지' , 'CDVAL':'2'}
		            ],
		            proxy: { type: 'memory', reader: { type: 'json' } }
	       	   },
	       	   listeners: {
	       		   change: 'onChangeSupType'
	         }
	    	},
	    	{ fieldLabel: '중지일자',  name: 'SUSPDT', xtype:'datefield', format:'Ymd'} ,
	    	{  fieldLabel: '중지사유', xtype:'combo', name: 'SUSPRESNCD',
	    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
	   		   minChars: 0, queryMode: 'local', typeAhead: true, 
		   		store: {xtype:'Common' }
	    	},
	    	{  
	    		xtype:'button', text: '중지등록' , margin:'5 5 0 0',
	    		handler: 'onSubmit'
	    	},
	    ]},
	    {
	    	xtype: 'grid', 
	    	flex:1,
	    	reference: 't112MdList', 
	    	headerBorders: true,
	    	columnLines: true,  
	        scrollable: true, 
	    	selModel: { type: 'checkboxmodel' },
	    	 viewConfig: {
	    	        enableTextSelection: true
	    	    },
	    	store: { type: 'T112SmdStore' },
	        plugins: { 
	            cellediting: { clicksToEdit: 1 }
	        }, 
	        columns: [ 
	        	{ text: '매체명', dataIndex: 'MEDINM', width:70 },  
	        	{ text: '구독구분', dataIndex: 'FREEYNNM', width:60}, 
	        	{ text: '무료구분', dataIndex: 'FREECLSFNM', width:60}, 
	        	{ text: '구독부수', dataIndex: 'QTY', width:60 },
	        	{
	        		text: '중지부수', dataIndex: 'SQTY', width:60,
	        		editor: {  xtype:'numberfield', minValue: 0, allowDecimals: false, allowBlank: false,  }
	        	} 
	        ],
	    }
    ],
    
    
    listeners: {
       // select: 'onItemSelected'
    }
});