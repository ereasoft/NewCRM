/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 이사조회
 *  기능정의 :  Grid
 *  참조테이블 : T501(이사독자)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.t501.T501List', {
    extend: 'Ext.grid.Panel',
    xtype: 't501-list',

    requires: [
        'hkCRM.store.T112Store', 
        'Ext.grid.filters.Filters',
        'hkCRM.view.t501.T501ListController'
    ],

    title: '이사',
    controller: 'T501List',
    store: {
        type: 'T501Store'
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
    	{ text: '신청일자', dataIndex: 'APLCDT', width:70 
        	,renderer: Ext.util.Format.dateRenderer('Y-m-d')
        }, 
        { text: '이사일자', dataIndex: 'MOVEDT',  width:70  
        	,renderer: Ext.util.Format.dateRenderer('Y-m-d')
        },
        { text: '이사지주소', dataIndex: 'MOVMADDR', width:150
        },
    	{ text: '이사지상세주소', dataIndex: 'MOVMDTLSADDR', width:100
        },
    	{ text: '인계지국', dataIndex: 'TRSFBONM', width:70
        },
    	{ text: '인수지국', dataIndex: 'ACPTBONM', width:70
        }, 
    	{ text: '상태', dataIndex: 'ACPTBOCNFMSTAT', width:70
        }  
    ],

    listeners: {
       // select: 'onItemSelected'
    }
});