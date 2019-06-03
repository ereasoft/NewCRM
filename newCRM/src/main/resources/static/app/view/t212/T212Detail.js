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
        'hkCRM.view.t212.T212DetailController' ,
        'Ext.button.Segmented'
    ],

    title: '자동이체신청',
    controller: 'T212Detail',    
    id: 'T212Detail',
    scrollable:true, 
    layout: {
        type: 'column'
    }, 
    
    bodyPadding: 5,
    
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 70,
        msgTarget: 'side' ,
        allowBlank:true,
        margin:'0 5 5 0',
        width:150
    },
    
    defaultType: 'textfield',
    
    items: [
    	{ xtype:'hiddenfield', name: 'loginID' ,value: sessionStorage.getItem("loginID") },
    	{ xtype:'hiddenfield', name: 'loginID' ,value: sessionStorage.getItem("loginID") },
    	{ xtype:'hiddenfield', name: 'rdr_no'  },
    	{ 
    		xtype:'hiddenfield', name: 'msg' , value:'' ,
    		listeners: {
    			       change: 'chkMsg'
    		 }	
    	}, 
    	{ xtype:'hiddenfield', name: 'sessionkey', value: sessionStorage.getItem("sessionkey") },
    	{ xtype:'hiddenfield', name: 'ARSKEY'  },
    	{ xtype:'hiddenfield', name: 'ACCFLAG' ,value: 'N' },
    	{ xtype:'hiddenfield', name: 'MEDICD' },
    	{  fieldLabel: '예금주명 ', name: 'PYMTNM',  width:300},  
    	{  fieldLabel: '이체은행',  xtype: 'combobox',  name: 'BANKCD', width:200,
    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL',  readOnly: false,
		    minChars: 0, queryMode: 'local', typeAhead: true, 
    		store: {xtype:'Common'}
        }, 
    	{  fieldLabel: '계좌번호  ', name: 'ACCTNO' ,width:250 }, 
    	{  fieldLabel: '생년월일', width:150, name: 'PRN' , emptyText:'또는 사업자번호' ,width:170}, 
    	{ fieldLabel: 'E-mail',  name: 'EMAIL', width:300, vtype: 'email'} ,
    	{ fieldLabel: '이체신청일', name: 'APLCDT', readOnly: true} ,
    	{ fieldLabel: '이체시작월 ',  name: 'APLYYYMM'} ,
    	{  xtype: 'fieldcontainer',  fieldLabel: '휴대폰번호',   layout: 'hbox', labelWidth: 70, width: 400,
            combineErrors: false,  defaultType: 'textfield',margin: '0 0 0 0', 
            defaults: {
                hideLabel: 'true'
            }, 
            items:[
            	{  allowBlank:true, name: 'PYMTTEL1', reference: 'PYMTTEL1', width:50  },
            	{  xtype:'displayfield', value:'-' , width:5 },
            	{  allowBlank:true, name: 'PYMTTEL2', reference: 'PYMTTEL2', width:50  },
            	{  xtype:'displayfield', value:'-' , width:5 },
            	{  allowBlank:true,  name: 'PYMTTEL3', reference: 'PYMTTEL3', width:50  }, 
            	{  
            		xtype:'segmentedbutton', allowToggle: false,margin:1, 
            		items: [{
            			text: '전화',
            			listeners: {
                			click: {
                             	fn: 'onTellCall',
                             	args: ['PYMTTEL']
                             },
                		}
                    }, {
                        text: '문자',
                        listeners: {
                			click: {
                             	fn: 'onTellSMS',
                             	args: ['PYMTTEL']
                             },
                		}
                    },
                	{  xtype:'button', text: '인증' , margin:'0 5 0 0' ,
                		handler: 'onARSAuth'
                	},] 
            	} 
            ]
    	},    
    	{  xtype:'button', text: '이체신청',  reference: 'addBtn', name: 'addBtn' ,handler: 'onSubmit'}
    ],
    
    
    listeners: {
       // select: 'onItemSelected'
    }
});