/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 구독계약조회
 *  기능정의 :  Grid
 *  참조테이블 : T111(신문구독), T112(신문구독계약)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.t111.T111List', {
    extend: 'Ext.grid.Panel',
    xtype: 't111-list',

    requires: [
        'hkCRM.store.T112Store', 
        'Ext.grid.filters.Filters',
        'hkCRM.view.t111.T111ListController'
    ],

    title: '구독계약',
    controller: 'T111List',
    store: {
        type: 'T112Store'
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
    
    columns: [ 
    	{ text: '매체명', dataIndex: 'MEDINM', width:70  }, 
    	{ text: '계약순번', dataIndex: 'CNTRNO', width:70  }, 
        { text: '확장일자', dataIndex: 'EXTNDT',  width:70  
        	,renderer: Ext.util.Format.dateRenderer('Y-m-d')
        },
        { text: '확장자명', dataIndex: 'EXTNPERSNM', width:70  },
    	{ text: '확장유형', dataIndex: 'EXTNTYPENM', width:70  },
        { text: '구독일자', dataIndex: 'SUBSFRDT',  width:70  
        	,renderer: Ext.util.Format.dateRenderer('Y-m-d')
        },
    	{ text: '부수', dataIndex: 'SUBSQTY', width:70 }  ,
    	{ text: '단가', dataIndex: 'SUBSUPRC', width:70 }  
    ],

    listeners: {
       // select: 'onItemSelected'
    }
});