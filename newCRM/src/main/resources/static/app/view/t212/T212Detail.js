/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 자동이체신청
 *  기능정의 :  Form
 *  참조테이블 : T212(신문구독), T212(자동이체신청)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.t212.T212Detail', {
    extend: 'Ext.form.Panel',
    xtype: 't212-detail',

    requires: [  
        'hkCRM.view.t212.T212DetailController'
    ],

    title: '자동이체신청',
    controller: 'T212Detail',    
    id: 'T212Detail',
    scrollable:true, 
    layout: {
        type: 'column'
    }, 
    
    bodyPadding: 10,
    
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 70,
        msgTarget: 'side' ,
        allowBlank:true,
        margin:'0 5 5 5',
        width:150
    },
    
    defaultType: 'textfield',
    
    items: [
    	{ xtype:'hiddenfield', name: 'loginID'  },
    	{ 
    		xtype:'hiddenfield', name: 'msg' , value:'' ,
    		listeners: {
    			       change: 'chkMsg'
    		 }	
    	},
    	{ xtype:'hiddenfield', name: 'loginNm'  },
    	{ xtype:'hiddenfield', name: 'sessionkey', value: sessionStorage.getItem("sessionkey") },
    	{  fieldLabel: '예금주명 ', name: 't212_no'  }, 
    	{  fieldLabel: '예금주전화번호 ', name: 't212_no'  }, 
    	{  allowBlank:false, fieldLabel: '이체은행 ', xtype:'combo', name: 't212_no'  }, 
    	{  fieldLabel: '계좌번호  ', name: 't212_no'  }, 
    	{  fieldLabel: '생년월일(6자리)/사업자번호', name: 't212_no'  }, 
    	{ fieldLabel: '이메일', xtype:'combo', name: 't212_no'} ,
    	{ fieldLabel: '이체신청일', xtype:'datefield', name: 't212_no'} ,
    	{ fieldLabel: '이체시작월 ',  name: 't212_no'} ,
    	{ fieldLabel: 'ARS핸드폰번호 ', name: 't212_no'} , 
    	{  xtype:'button', text: '인증' , margin:'0 5 0 0' ,
    		handler: 'onARSAuth'
    	},
    	{  xtype:'button', text: '획인' , margin:'0 5 0 0' },
    	{  xtype:'button', text: '신규' }
    ],
    
    
    listeners: {
       // select: 'onItemSelected'
    }
});