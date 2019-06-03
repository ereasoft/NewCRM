/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 독자조회
 *  기능정의 :  Grid
 *  참조테이블 : T107,  T107N
 *  최초작성일 : 2019.01.30
 *  최종수정일 : 2019.01.30
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.rdr.RdrList', {
    extend: 'Ext.grid.Panel',
    xtype: 'rdr-list',

    requires: [
        'hkCRM.store.RdrStore', 
        'Ext.grid.filters.Filters',
        'hkCRM.view.rdr.RdrListController',
        'Ext.window.Toast',
        'Ext.TaskManager'
    ],

    title: '독자조회',
    id: 'rdrlist',
    controller: 'RdrList',
    store: {
        type: 'RdrStore' 
    },
    stateful: false,
   // collapsible: true,
    //multiSelect: true, 
    headerBorders: true,
    columnLines: true, 
	multiColumnSort: true, 
    scrollable: true, 
    enableLocking: true,
    viewConfig: {
        enableTextSelection: true
    },
    selModel: {
        mode: 'SINGLE'
    },
    plugins: {
        gridfilters: true
    }, 
    
    tbar:{ 
        defaultType: 'textfield',
        reference: 'tbar',
    	items:[
	    		{   fieldLabel: '독자구분', xtype:'combo', name: 'sRDRCLSF',width:160,  labelWidth:50, 
		    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', reference: 'sRDRCLSF',
		   		   minChars: 0, queryMode: 'local', typeAhead: true, 
		       	   store: {
			       		fields: ['CDNM', 'CDVAL'],
			            data: [
			                { 'CDNM': '전체' , 'CDVAL':''}, 
			                { 'CDNM': '일반' , 'CDVAL':'01'}, 
			                { 'CDNM': '대학생' , 'CDVAL':'02'}, 
			                { 'CDNM': '일반(전환)' , 'CDVAL':'03'}, 
			                { 'CDNM': '세트' , 'CDVAL':'04'}
			            ],
			            proxy: { type: 'memory', reader: { type: 'json' } }
		       	   },
		       	   listeners: {
		       		  // change: 'onChangeSupType'
		         }
	    	},{   fieldLabel: '조건', xtype:'combo', name: 'SEARCH_SEL',width:140,  labelWidth:30, margin:'0 0 0 5' ,
	    		publishes: 'value',  displayField: 'CDNM', valueField: 'CDVAL', reference: 'SEARCH_SEL',
		   		   minChars: 0, queryMode: 'local', typeAhead: true, 
		       	   store: {
			       		fields: ['CDNM', 'CDVAL'],
			            data: [
			                { 'CDNM': '통합' , 'CDVAL':'01'}, 
			                { 'CDNM': '구역' , 'CDVAL':'02'}, 
			                { 'CDNM': '구역+배달' , 'CDVAL':'03'}, 
			                { 'CDNM': '독자번호' , 'CDVAL':'04'}, 
			                { 'CDNM': '독자명' , 'CDVAL':'05'}, 
			                { 'CDNM': '주소' , 'CDVAL':'06'}, 
			                { 'CDNM': '연락처' , 'CDVAL':'07'}
			            ],
			            proxy: { type: 'memory', reader: { type: 'json' } }
		       	   },
		       	   listeners: {
		       		  // change: 'onChangeSupType'
		         }
	    	},
    		{ 
	    		hideLabel:true, width:200 ,name: 'SEARCH_NM', margin:'0 0 0 5', reference: 'SEARCH_NM', enableKeyEvents: true,
	    		listeners: {  
	    				 specialkey : 'keyPress' 
    			} 
    		} ,
    		{  
    			xtype:'button', text: '조회' , margin:'0 0 0 5' ,
    			iconCls: 'fa fa-search',
    			listeners: { 
    				click: 'searchRdr'
    			} 
    		},
    		{
			xtype:'button', text: '초기화' , margin:'0 0 0 5' ,
			iconCls: 'fa fa-eraser',
			listeners: { 
				click: 'resetItems'
			} 
		},
    	]
    },
    
    columns: [
    	
    	 { text: '독자번호', dataIndex: 'RDR_NO', width:100, renderer: 'renderColor',
         	items: {
                 xtype: 'textfield',
                 fieldStyle: 'width:100%',
                 reference: 'RDR_NO', 
                 margin: 1,
                 enableKeyEvents: true,
                 listeners: {
                 	keyup: {
                     	fn: 'onNameFilterKeyup',
                     	args: ['RDR_NO']
                     },
                     buffer: 500
                 }
             }
     		,  locked: true
         },

         { text: '독자명', dataIndex: 'RDRNM',  width:200,
         	items: {
                 xtype: 'textfield',
                 fieldStyle: 'width:100%',
                 reference: 'RDRNM', 
                 margin: 1,
                 enableKeyEvents: true,
                 listeners: {
                 	keyup: {
                     	fn: 'onNameFilterKeyup',
                     	args: ['RDRNM']
                     },
                     buffer: 500
                 }
             }
     		,  locked: true
         },
         { text: '독자구분', dataIndex: 'RDRCLSF', width:100,
         	items: {
                 xtype: 'textfield',
                 fieldStyle: 'width:100%',
                 reference: 'RDRCLSF', 
                 margin: 1,
                 enableKeyEvents: true,
                 listeners: {
                 	keyup: {
                     	fn: 'onNameFilterKeyup',
                     	args: ['RDRCLSF']
                     },
                     buffer: 500
                 }
             }
         },
    	{ text: '지국명', dataIndex: 'BONM', width:150
        	,items: {
                xtype: 'textfield',
                fieldStyle: 'width:100%',
                reference: 'BONM', 
                margin: 1,
                enableKeyEvents: true,
                listeners: {
                	keyup: {
                    	fn: 'onNameFilterKeyup',
                    	args: ['BONM']
                    },
                    buffer: 500
                }
            }

        },
    	{ text: '구역배달', dataIndex: 'DLVDSTCCD_NO_INTVNO', width:100,
        	items: {
                xtype: 'textfield',
                fieldStyle: 'width:100%',
                reference: 'DLVDSTCCD_NO_INTVNO', 
                margin: 1,
                enableKeyEvents: true,
                listeners: {
                	keyup: {
                    	fn: 'onNameFilterKeyup',
                    	args: ['DLVDSTCCD_NO_INTVNO']
                    },
                    buffer: 500
                }
            }
        	,renderer: 'mergeDlvd'
        },
       
        { text: '전화', dataIndex: 'RDRTEL_NO', width:150,
        	items: {
                xtype: 'textfield',
                fieldStyle: 'width:100%',
                reference: 'RDRTEL_NO', 
                margin: 1,
                enableKeyEvents: true,
                listeners: {
                	keyup: {
                    	fn: 'onNameFilterKeyup',
                    	args: ['RDRTEL_NO']
                    },
                    buffer: 500
                }
            }
        	,renderer: 'mergeTel'
        },
        { text: '휴대폰', dataIndex: 'RDRPTPH_NO', width:150,
        	items: {
                xtype: 'textfield',
                fieldStyle: 'width:100%',
                reference: 'RDRPTPH_NO', 
                margin: 1,
                enableKeyEvents: true,
                listeners: {
                	keyup: {
                    	fn: 'onNameFilterKeyup',
                    	args: ['RDRPTPH_NO']
                    },
                    buffer: 500
                }
            }
        	,renderer: 'mergePh'
        },
        { text: '주소', dataIndex: 'DLVADDR',  width:300,
        	items: {
                xtype: 'textfield',
                fieldStyle: 'width:100%',
                reference: 'DLVADDR', 
                margin: 1,
                enableKeyEvents: true,
                listeners: {
                	keyup: {
                    	fn: 'onNameFilterKeyup',
                    	args: ['DLVADDR']
                    },
                    buffer: 500
                }
            }
        	,renderer: 'mergeAddr'
        },
        { text: '상세주소', dataIndex: 'DLVDTLSADDR',  width:150,
        	items: {
                xtype: 'textfield',
                fieldStyle: 'width:100%',
                reference: 'DLVDTLSADDR', 
                margin: 1,
                enableKeyEvents: true,
                listeners: {
                	keyup: {
                    	fn: 'onNameFilterKeyup',
                    	args: ['DLVDTLSADDR']
                    },
                    buffer: 500
                } 
        	}
        
        },
        { text: '총구독액', dataIndex: 'TOTSUBSAMT', width:150,
        	items: {
                xtype: 'textfield',
                fieldStyle: 'width:100%',
                reference: 'TOTSUBSAMT', 
                margin: 1,
                enableKeyEvents: true,
                listeners: {
                	keyup: {
                    	fn: 'onNameFilterKeyup',
                    	args: ['TOTSUBSAMT']
                    },
                    buffer: 500
                }
            }
        },
        { text: '중지', dataIndex: 'SUSPYN', width:50,
        	items: {
                xtype: 'textfield',
                fieldStyle: 'width:100%',
                reference: 'SUSPYN', 
                margin: 1,
                enableKeyEvents: true,
                listeners: {
                	keyup: {
                    	fn: 'onNameFilterKeyup',
                    	args: ['SUSPYN']
                    },
                    buffer: 500
                }
            }
        }
    ],
    
    listeners: {
        load: 'onLoad' 
     }

});