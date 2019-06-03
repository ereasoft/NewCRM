/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 이사
 *  기능정의 :  Form
 *  참조테이블 : T501(이사독자)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.t501.T501Detail', {
    extend: 'Ext.form.Panel',
    xtype: 't501-detail',

    requires: [  
        'hkCRM.view.t501.T501DetailController',
        'hkCRM.view.common.sendSMSController' ,
        'Ext.button.Segmented'
    ],

    title: '이사정보',
    controller: 'T501Detail',    
    scrollable:true, 
    layout: {
        type: 'column'
    }, 
    
    bodyPadding: 5,
    
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 70, 
        allowBlank:true,
        margin:'0 5 5 0' ,
        width:160
    },
    
    defaultType: 'textfield',
    
    items: [
    	{ xtype:'hiddenfield', name: 'loginID'  },
    	{ xtype:'hiddenfield', name: 'sessionkey', value: sessionStorage.getItem("sessionkey") },
    	{ xtype:'hiddenfield', name: 'loginNm'  },
    	{  xtype: 'hiddenfield', name: 'ACCFLAG', value: 'I'  },  
    	{  xtype:'hiddenfield', name: 'USERFLAG', value: '40' }, 
    	{  xtype:'hiddenfield', name: 'REGNO' }, 
    	{  xtype:'hiddenfield', name: 'REGDT' },  
    	{  xtype:'hiddenfield', name: 'RDR_NO' },   
    	{  xtype:'hiddenfield', name: 'RDRNM' },
    	{  xtype:'hiddenfield', name: 'MOVEDT2'}, 
    	{  xtype:'hiddenfield', name: 'DLVHOPEDT2'},   
    	{ 
    		xtype:'hiddenfield', name: 'MOVMZIPBLDGNUM',
    		listeners: {
    			change : 'chgACPTBOCD'
    		}
    	},
    	{ xtype:'hiddenfield', name: 'ONMBRID_ORI'  },
    	{ xtype:'hiddenfield', name: 'ACPTBO_TEL' ,reference: 'ACPTBO_TEL' },
    	{  xtype: 'fieldcontainer',  fieldLabel: '연락처',   layout: 'hbox', width:250,
            combineErrors: false,  defaultType: 'textfield',margin: '0 -5 -5 0',
            defaults: {
                hideLabel: 'true'
            }, 
            items:[
            	{ 
            		allowBlank:true, xtype:'combobox', fieldLabel: '지역번호', name: 'MOVMTEL_NO1' , width:50,
            		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL',  
				    minChars: 0, queryMode: 'local', typeAhead: true, 
            		store: {xtype:'Common'},
                },
            	{  xtype:'displayfield', value:'-' , width:5 },
            	{  allowBlank:true, fieldLabel: '국번', name: 'MOVMTEL_NO2', width:40  },
            	{  xtype:'displayfield', value:'-' , width:5 },
            	{  allowBlank:true, fieldLabel: '전화번호', name: 'MOVMTEL_NO3', width:40  } 
            ]
    	}, 
    	{  allowBlank:false, fieldLabel: '이사일자 ', xtype:'datefield', name: 'MOVEDT'  ,format: 'Ymd' }, 
    	 
    	{  xtype: 'fieldcontainer',  fieldLabel: '휴대폰',   layout: 'hbox', width:250,
            combineErrors: false,  defaultType: 'textfield',margin: '0 -5 -5 0', 
            defaults: {
                hideLabel: 'true'
            }, 
            items:[
            	{ 
            		allowBlank:true, xtype:'combobox', fieldLabel: '국번', name: 'RDRPTPH_NO1' , width:50,
            		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
				    minChars: 0, queryMode: 'local', typeAhead: true, 
            		store: {xtype:'Common'},
                },
            	{  xtype:'displayfield', value:'-' , width:5 },
            	{  allowBlank:true, fieldLabel: '휴대전화1', name: 'RDRPTPH_NO2', width:40  },
            	{  xtype:'displayfield', value:'-' , width:5 },
            	{  allowBlank:true, fieldLabel: '휴대전화2', name: 'RDRPTPH_NO3', width:40  } 
            ]
    	},     
    	{  fieldLabel: '배달희망일 ', name: 'DLVHOPEDT', xtype:'datefield' ,format: 'Ymd' },  
    	{ allowBlank:true, fieldLabel: '회사상호', width:220, name: 'MOVMBNJI'  },  
    	{ fieldLabel: '인수지국',  name: 'ACPTBONM'} ,
    	{  
    		xtype:'segmentedbutton', allowToggle: false,margin:1, 
    		items: [{
    			text: '전화',
    			listeners: {
        			click: {
                     	fn: 'onTellCall',
                     	args: ['BOTEL']
                     },
        		}
            }/*, {
                text: '문자',
                listeners: {
        			click: {
                     	fn: 'onTellSMS',
                     	args: ['BOTEL']
                     },
        		}
            }*/] 
    	}  ,
    	{
    		xtype: 'fieldcontainer',
            fieldLabel: '이사지주소', 
            layout: 'column',
            margin: '0 0 0 0', 
            combineErrors: false, 
            defaultType: 'textfield',
            defaults: {
                hideLabel: 'true',
            }, 
            items:[
            	{  
            		allowBlank:true, fieldLabel: '우편번호', name: 'MOVMZONECODE' , width:75, readOnly:true,
            		listeners: {
            			 render: function() {
            	                this.getEl().on('click', 'findAddrDaum' ); 
            	         } 
    				}
            	},
            	{  allowBlank:true, fieldLabel: '도로명', name: 'MOVMADDR_DO', width:340 , emptyText: '도로명주소',readOnly:true },
            	{  allowBlank:true, fieldLabel: '지번', name: 'MOVMADDR', width:340 , emptyText: '지번주소',readOnly:true }, 
            	{  allowBlank:true, fieldLabel: '상세주소', name: 'MOVMDTLSADDR', width:260, emptyText: '상세주소'  }
            ]
    	},  
    	{ fieldLabel: '비고',  xtype:'textarea', width:380, name: 'REMK'} ,  
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
       // select: 'onItemSelected'
    }
});