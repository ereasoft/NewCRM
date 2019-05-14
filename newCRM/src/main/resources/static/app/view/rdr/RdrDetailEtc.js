/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 독자정보- 추가정보
 *  기능정의 :  Form
 *  참조테이블 : T107,  T107N
 *  최초작성일 : 2019.02.12
 *  최종수정일 : 2019.02.12
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.rdr.RdrDetailEtc', {
    extend: 'Ext.form.Panel',
    xtype: 'rdr-detail-etc',

    requires: [  
        'hkCRM.view.rdr.RdrDetailEtcController'
    ],

    title: '기타정보',
    controller: 'RdrDetailEtc',    
    scrollable:true,
    
    layout: {
        type: 'column', 
    }, 
    
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 60, 
        allowBlank:true,
        width:150,
        margin: 4
    },
    
    defaultType: 'textfield',
    
    items: [
    	{ xtype:'hiddenfield', name: 'loginID' ,reference: 'loginID' },
    	{ xtype:'hiddenfield', name: 'loginNm' ,reference: 'loginNm' },
    	{ xtype:'hiddenfield', name: 'RDR_NO' ,reference: 'RDR_NO' },
    	{  allowBlank:true, fieldLabel: '신청년도', name: 'APLCYY'  },
    	{  fieldLabel: '학교명', name: 'SCHLNM' , width:250},
    	{  allowBlank:true, fieldLabel: '학과명', name: 'DEPTNM' ,width:250 },
    	{  fieldLabel: '학년', name: 'GRADE'  ,width:120}, 
    	{  allowBlank:true, fieldLabel: '학번', name: 'STDNNO' ,width:190 },
    	{  allowBlank:true, fieldLabel: '학생구분', name: 'STDNCLSF' , xtype:'combobox',
    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
		    minChars: 0, queryMode: 'local', typeAhead: true, 
    		store: {xtype:'Common'},
    	},
    	{ allowBlank:true, fieldLabel: '추천인', name: 'RECOMPROF' ,width:200 }, 
      	{  allowBlank:true, fieldLabel: '구독동기', name: 'SUBSSYNC' , xtype:'combobox',
    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL',width:250 ,
		    minChars: 0, queryMode: 'local', typeAhead: true, 
    		store: {xtype:'Common'},
    	}, 
      	{  allowBlank:true, fieldLabel: '구독경로', name: 'SUBSPATH' , xtype:'combobox',
    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', width:250 ,
		    minChars: 0, queryMode: 'local', typeAhead: true, 
    		store: {xtype:'Common'},
    	},
      	{  fieldLabel: '구독경로비고', name: 'SUBSPATHREMK',labelWidth: 80, width:500 }, 
      	{  allowBlank:true, fieldLabel: '1년약정', name: 'ONEYYAGRMNTYN',xtype:'checkbox', inputValue:'Y' ,width:80 },
      	{ fieldLabel: '생글생글구독', name: 'SGSGSUBSYN', xtype:'checkbox', inputValue:'Y',labelWidth: 80, width:120  },
      	{  allowBlank:true, fieldLabel: '일반독자전환자', name: 'SWITPERS', labelWidth: 95, width:220},
      	{  allowBlank:true, fieldLabel: '일반독자전환일', xtype:'datefield', format: 'Ymd', name: 'SWITDT',labelWidth: 89, width:200  }
    	//{  xtype:'button', text:'정보수정' , margin:'4 2 2 10'} 
    ],
    
    
    listeners: {
       // select: 'onItemSelected'
    }
});