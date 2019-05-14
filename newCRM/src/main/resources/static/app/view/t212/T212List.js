/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 자동이체
 *  기능정의 :  Grid
 *  참조테이블 : T212(신문구독), T212(자동이체신청)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.t212.T212List', {
    extend: 'Ext.grid.Panel',
    xtype: 't212-list',

    requires: [
        'hkCRM.store.T112Store', 
        'Ext.grid.filters.Filters',
        'hkCRM.view.t212.T212ListController'
    ],

    title: '자동이체',
    controller: 'T212List',
    store: {
        type: 'T212Store'
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
    	{ text: '매체명', dataIndex: 'MEDINM', width:50 
        }, 
        { text: '유가부수', dataIndex: 'VALQTY',  width:70   
        },
        { text: '준유가부수', dataIndex: 'NO_VALQTY', width:70
        },
    	{ text: '무료부수', dataIndex: 'PRE_VALQTY', width:70
        },
    	{ text: '실구독금액', dataIndex: 'REALSUBSAMT', width:70
        }, 
    	{ text: '수금방법', dataIndex: 'CLAMTMTHDNM', width:70
        }  
    ],

    listeners: {
       // select: 'onItemSelected'
    }
});