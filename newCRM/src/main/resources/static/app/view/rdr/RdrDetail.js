/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 독자정보
 *  기능정의 :  Form
 *  참조테이블 : T107,  T107N
 *  최초작성일 : 2019.02.12
 *  최종수정일 : 2019.02.12
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.rdr.RdrDetail', {
    extend: 'Ext.form.Panel',
    xtype: 'rdr-detail',

    requires: [  
        'hkCRM.view.rdr.RdrDetailController', 
        'hkCRM.view.common.sendSMSController' ,
        'Ext.button.Segmented'
    ],

    title: '독자정보',
    controller: 'RdrDetail',    
    scrollable:true, 
    layout: {
        type: 'column'
        /*columns: 6,
        tableAttrs: {
            style: {
                width: '100%'
            }
        }*/
    }, 
    
    fieldDefaults: { 
        labelAlign: 'right',
        labelWidth: 70,
       //msgTarget: 'side' ,
        allowBlank:true,  
        margin: '0 5 5 0'
    },
    
    defaultType: 'textfield',
    
    items: [
    	//hidden field
    	{ xtype:'hiddenfield', name: 'BOCD'  },
    	{ xtype:'hiddenfield', name: 'DLVZIPBLDGNUM'  },
    	{ xtype:'hiddenfield', name: 'ONMBRID_ORI'  },
    	{ xtype:'hiddenfield', name: 'BOTELNO' ,reference: 'BOTELNO' },
    	{ xtype:'hiddenfield', name: 'LOGINTYPE' ,reference: 'LOGINTYPE' },
    	{ xtype:'hiddenfield', name: 'loginID' },
    	{ xtype:'hiddenfield', name: 'loginNm'  },
    	{ xtype:'hiddenfield', name: 'DLVZIP1'  },
    	{ xtype:'hiddenfield', name: 'DLVZIP2'  }, 
    	{ xtype:'hiddenfield', name: 'sessionkey', value: sessionStorage.getItem("sessionkey") }, 
    	
    	{  fieldLabel: '독자번호', name: 'RDR_NO', width:150, readOnly:true  },
    	{  allowBlank:false, fieldLabel: '독자/담당자', name: 'RDRNM'  },
    	{  allowBlank:true, fieldLabel: '회사상호', labelWidth: 60, width:220, name: 'DLVBNJI'  }, 
    	{  xtype: 'fieldcontainer',  fieldLabel: '연락처',   layout: 'hbox', labelWidth: 50,
            combineErrors: false,  defaultType: 'textfield',margin: '0 0 0 0', 
            defaults: {
                hideLabel: 'true'
            }, 
            items:[
            	{ 
            		allowBlank:true, xtype:'combobox', fieldLabel: '지역번호', name: 'RDRTEL_NO1' , reference: 'RDRTEL_NO1', width:50,
            		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
				    minChars: 0, queryMode: 'local', typeAhead: true, 
            		store: {xtype:'Common'},
                },
            	{  xtype:'displayfield', value:'-' , width:5 },
            	{  allowBlank:true, fieldLabel: '국번', name: 'RDRTEL_NO2', reference: 'RDRTEL_NO2', width:50  },
            	{  xtype:'displayfield', value:'-' , width:5 },
            	{  allowBlank:true, fieldLabel: '전화번호', name: 'RDRTEL_NO3', reference: 'RDRTEL_NO3', width:50  }, 
            	{  
            		xtype:'segmentedbutton', allowToggle: false,margin:1, 
            		items: [{
            			text: '전화',
            			listeners: {
                			click: {
                             	fn: 'onTellCall',
                             	args: ['RDRTEL']
                             },
                		}
                    }/*, {
                        text: '문자',
                        listeners: {
                			click: {
                             	fn: 'onTellSMS',
                             	args: ['RDRTEL']
                             },
                		}
                    }*/] 
            	} 
            ]
    	},  
    	{  xtype: 'fieldcontainer',  fieldLabel: '휴대폰',   layout: 'hbox', labelWidth: 50,
            combineErrors: false,  defaultType: 'textfield',margin: '0 0 0 0', 
            defaults: {
                hideLabel: 'true'
            }, 
            items:[
            	{ 
            		allowBlank:true, xtype:'combobox', fieldLabel: '국번', name: 'RDRPTPH_NO1' , reference: 'RDRPTPH_NO1', width:50,
            		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
				    minChars: 0, queryMode: 'local', typeAhead: true, 
            		store: {xtype:'Common'},
                },
            	{  xtype:'displayfield', value:'-' , width:5 },
            	{  allowBlank:true, fieldLabel: '휴대전화1', name: 'RDRPTPH_NO2', reference: 'RDRPTPH_NO2', width:50  },
            	{  xtype:'displayfield', value:'-' , width:5 },
            	{  allowBlank:true, fieldLabel: '휴대전화2', name: 'RDRPTPH_NO3', reference: 'RDRPTPH_NO3', width:50  },
            	{  
            		xtype:'segmentedbutton', allowToggle: false,margin:1, 
            		items: [{
            			text: '전화',
            			listeners: {
                			click: {
                             	fn: 'onTellCall',
                             	args: ['RDRPTPH']
                             },
                		}
                    }, {
                        text: '문자',
                        listeners: {
                			click: {
                             	fn: 'onTellSMS',
                             	args: ['RDRPTPH']
                             },
                		}
                    }] 
            	}  
            ]
    	},    
    	{ fieldLabel: 'SMS여부', name: 'SMSTRSMOBJYN', xtype:'checkbox', inputValue:'Y'  },
    	{
    		xtype: 'fieldcontainer',
            fieldLabel: '주소', 
            layout: 'hbox',
            margin: '0 0 0 0', 
            combineErrors: false, 
            defaultType: 'textfield',
            defaults: {
                hideLabel: 'true',
            }, 
            items:[
            	{  
            		allowBlank:true, fieldLabel: '우편번호', name: 'DLVZONECODE' , width:75, readOnly:true,
            		listeners: {
            			 render: function() {
            	                this.getEl().on('click', 'findAddrDaum' ); 
            	         } 
    				}
            	},
            	{  allowBlank:true, fieldLabel: '도로명', name: 'DLVADDR_DO', width:300 , emptyText: '도로명주소',readOnly:true },
            	{  allowBlank:true, fieldLabel: '지번', name: 'DLVADDR', width:300, emptyText: '지번주소'  },
            	{  allowBlank:true, fieldLabel: '상세주소', name: 'DLVDTLSADDR', width:260, emptyText: '상세주소'  }
            ]
    	},  
    	{ fieldLabel: 'E-mail', name: 'EMAIL', vtype: 'email', labelWidth:50, width:270  }, 
    	{ fieldLabel: '독자비고', name: 'REMK' ,xtype:'textarea', width:500, height:85},  
    	{
    		xtype: 'fieldcontainer', 
    		fieldLabel: '온라인',
            layout: 'hbox', margin: '0 0 0 0', 
            combineErrors: false, 
            defaultType: 'textfield',
            defaults: {  
                hideLabel:true
            }, 
            items:[ 
            	{  allowBlank:true, fieldLabel: 'ID', name: 'ONMBRID', reference: 'ONMBRID' },
            	{ 
            		xtype:'displayfield', reference: 'ONMBRIDTYPE', name: 'ONMBRIDTYPE',value:'( ID구분)' , width:70,
            		listeners: {
            			/*render: function() {
        	                this.getEl().on('click', 'onLogHis' ); 
        	           }  */
            		}
            	},
            ]
    	},   
    	{  fieldLabel: '비밀번호', name: 'ONMBRPW', readOnly:true},
    	{
    		xtype: 'fieldcontainer', 
            layout: 'hbox',
            combineErrors: false,  
            defaultType: 'textfield',
            defaults: {  
            }, 
            items:[ 
            	{  allowBlank:true, fieldLabel: 'WSJ E-mail', vtype: 'email', width:270, name: 'WSJ_EMAIL' }, 
            	{  allowBlank:true, fieldLabel: 'WSJ LNamel', name: 'WSJ_LNAME' }, 
            	{  allowBlank:true, fieldLabel: 'WSJ FName', name: 'WSJ_FNAME' } 
            ]
    	},   
    	{  allowBlank:false, fieldLabel: '지국', width:200, name: 'BONM' ,readOnly:true },
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
    	} ,
    	{  xtype: 'fieldcontainer',  fieldLabel: '구역-배달',   layout: 'hbox',
            combineErrors: false,  defaultType: 'textfield',
            defaults: {
                hideLabel: 'true'
            }, 
            items:[
            	{ 
            		allowBlank:false, xtype:'combobox', fieldLabel: '구역', name: 'DLVDSTCCD' , width:120,
            		publishes: 'value',  displayField: 'DSTCNM', valueField: 'DSTCCD', 
				    minChars: 0, queryMode: 'local', typeAhead: true, 
            		store: {xtype:'Dstccd'},
                },
            	{  xtype:'displayfield', value:'-' , width:5 },
            	{  allowBlank:false, fieldLabel: '배달번호', name: 'DLVNO', width:50  },
            	{  xtype:'displayfield', value:'-' , width:5 },
            	{  allowBlank:true, fieldLabel: '사이번호', name: 'DLVINTVNO', width:50  }
            ]
    	},  
    	{ 
    		allowBlank:false, xtype:'combobox', fieldLabel: '배달방법', name: 'DLVMTHDCD' , width:150, 
    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', 
		    minChars: 0, queryMode: 'local', typeAhead: true, 
    		store: {xtype:'Common'},
        },
    	{  
        	xtype:'button', text:'정보수정' , margin:'2 2 0 10',
        	handler: 'rdrUpdate'
    	} 
    ],
    
    
    listeners: {
       // select: 'onItemSelected'
    }
});