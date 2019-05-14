/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 수금조회
 *  기능정의 :  Grid
 *  참조테이블 : T111(신문구독), T114(신문구독수금), T914(전사공통코드)
 *  최초작성일 : 2019.02.13
 *  최종수정일 : 2019.02.13
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.t114.T114List', {
    extend: 'Ext.grid.Panel',
    xtype: 't114-list',

    requires: [
        'hkCRM.store.T114Store',  
        'Ext.grid.filters.Filters',
        'hkCRM.view.t114.T114ListController'
    ],

    title: '수금조회',
    controller: 'T114List',
    store: {
        type: 'T114Store'
    },
    stateful: true,
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
    		/*{  fieldLabel: '년도',  labelWidth: 30,width:100, xtype: 'combobox', reference: 'brfyear', name: 'brfyear', publishes: 'value',   valueField: 'code', 
    		   displayField: 'codenm', anchor: '-15', minChars: 0, queryMode: 'local',  typeAhead: true,
    	       store: { type: 'ComYear' } 
    		},*/
    		{  
    			xtype:'button', margin:'0 0 0 0' ,
    			iconCls: 'fa fa-arrow-left',
    			handler: 'onPrevMM'
    		},
    		{  
    			xtype:'button', margin:'0 0 0 0' ,
    			iconCls: 'fa fa-arrow-right',
    			handler: 'onNextMM'
    		},
    		{fieldLabel: '전년수금', labelWidth: 50, width:150 ,name: 'brfcur', readOnly:true},
    		{fieldLabel: '금년수금',  labelWidth: 50, width:150  ,name: 'brfcur2', readOnly:true},
    		{fieldLabel: '미수', labelWidth: 30, width:150, name: 'clamt', readOnly:true},
    		{xtype: 'hiddenfield', name: 'medicd'},
    		{xtype: 'hiddenfield', name: 'prevyymm'},
    		{xtype: 'hiddenfield', name: 'nextyymm'},
    		{xtype: 'hiddenfield', name: 'curryymm'}
    	]
    },
    
    columns: [ 
    	{ text: '월', dataIndex: 'SUBSMAPPLI', width:50 
        }, 
        { text: '수금일자', dataIndex: 'RECPDT',  width:70  
        	,renderer: Ext.util.Format.dateRenderer('Y-m-d')
        },
        { text: '청구액', dataIndex: 'CLAMAMT', width:70
        },
    	{ text: '수금액', dataIndex: 'CLAMT', width:70
        },
    	{ text: '수금구분', dataIndex: 'RCPMCLSFNM', width:100
        }  
    ],

    listeners: {
       // select: 'onItemSelected'
    }
});