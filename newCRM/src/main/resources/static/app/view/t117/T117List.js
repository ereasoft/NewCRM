/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 휴독
 *  기능정의 :  Grid
 *  참조테이블 : T117(휴독)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.t117.T117List', {
    extend: 'Ext.grid.Panel',
    xtype: 't117-list',

    requires: [
        'hkCRM.store.T112Store', 
        'Ext.grid.filters.Filters',
        'hkCRM.view.t117.T117ListController'
    ],

    title: '휴독',
    controller: 'T117List',
    store: {
        type: 'T117Store'
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
    	{ text: '매체명', dataIndex: 'MEDINM', width:80
        }, 
        { text: '신청일자', dataIndex: 'APLCDT',  width:70  
        	,renderer: Ext.util.Format.dateRenderer('Y-m-d')
        },
        { text: '시작일자', dataIndex: 'SUSPFRDT',  width:70  
        	,renderer: Ext.util.Format.dateRenderer('Y-m-d')
        },
        { text: '종료일자', dataIndex: 'SUSPTODT',  width:70  
        	,renderer: Ext.util.Format.dateRenderer('Y-m-d')
        },
        { text: '배달일자', dataIndex: 'DLVDT',  width:70  
        	,renderer: Ext.util.Format.dateRenderer('Y-m-d')
        },
        { text: '서비스구분', dataIndex: 'STOPCLSFNM', width:70, hidden:true
        },
    	{ text: '확인', dataIndex: 'BOCNFMSTATNM', width:70
        }
    ],

    listeners: {
       // select: 'onItemSelected'
    }
});