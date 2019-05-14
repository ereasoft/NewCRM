/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 민원정보
 *  기능정의 :  Form
 *  참조테이블 : T110
 *  최초작성일 : 2019.02.13
 *  최종수정일 : 2019.02.13
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.t110.T110Detail', {
    extend: 'Ext.form.Panel',
    xtype: 't110-detail',

    requires: [  
        'hkCRM.view.t110.T110DetailController'
    ],

    title: '민원정보',
    controller: 'T110Detail',    
    scrollable:true,
    
    layout: {
        type: 'column'
    }, 
    
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 60,
       //msgTarget: 'side' ,
        allowBlank:true,
        margin:'0 0 5 0',
        width:150
    },
    
    defaultType: 'textfield',
    
    items: [
    	{ xtype:'hiddenfield', name: 'loginID' ,reference: 'loginID' },
    	{ xtype:'hiddenfield', name: 'loginNm' ,reference: 'loginNm' },
    	{ xtype:'hiddenfield', name: 'sessionkey', value: sessionStorage.getItem("sessionkey") }, 
    	{  xtype:'hiddenfield', name: 'ACCFLAG' , value: 'I'}, 
    	{  xtype:'hiddenfield', name: 'USERFLAG' , value: '30'}, 
    	{  xtype:'hiddenfield', name: 'REGNO' }, 
    	{  xtype:'hiddenfield', name: 'REGDT' }, 
    	{  xtype:'hiddenfield', name: 'BOCD'}, ,
    	{  xtype:'hiddenfield', name: 'RDR_NO'}, 
    	{  allowBlank:false, fieldLabel: '접수일자', xtype:'datefield', format:'Ymd', name: 'ACPNDT', readOnly:true  }, 
    	{ 
    		allowBlank:false, xtype:'combobox', fieldLabel: '민원유형', name: 'DSCTTYPECD' , width:200, 
    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
		    minChars: 0, queryMode: 'local', typeAhead: true, 
    		store: {xtype:'Common'}
        }, 
        { 
    		allowBlank:false, xtype:'combobox', fieldLabel: '접수경로', name: 'ACPNPATHCD' , width:200, 
    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
		    minChars: 0, queryMode: 'local', typeAhead: true, 
    		store: {xtype:'Common'}
        },   
        {  fieldLabel: '지국처리', xtype:'checkbox', name: 'BOPROCYN' , readOnly:true, width:100 }, 
    	{  fieldLabel: '상담원확인', xtype:'checkbox', name: 'CNS_EMPCNFMYN', labelWidth: 70,width:100  }, 
    	{  xtype:'button', text:'민원처리', margin: '0 5 0 0',
    		handler: 'save'
    	},
    	{  xtype:'button', text:'초기화' ,
    		handler: 'reset'
    	},
    	{ allowBlank:false, fieldLabel: '제목', name: 'TITL', width:1000  },
    	{  allowBlank:false, fieldLabel: '민원내용', xtype:'textarea',  width:400, height:150, name: 'CONT'  },
    	{  allowBlank:true, fieldLabel: '상담원처리', xtype:'textarea', labelWidth:70,width:400, height:150, readOnly:false, name: 'CNS_EMPCNFMREMK'  },
    	{  allowBlank:true, fieldLabel: '지국처리', xtype:'textarea', width:400, height:150, readOnly:false, name: 'BOPROCCONT'}  
    ],
    
    
    listeners: {
       // select: 'onItemSelected'
    }
});