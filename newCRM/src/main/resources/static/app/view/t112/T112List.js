/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 중지
 *  기능정의 :  Grid
 *  참조테이블 : T112(신문구독)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.t112.T112List', {
    extend: 'Ext.grid.Panel',
    xtype: 't112-list',

    requires: [
        'hkCRM.store.T112SStore', 
        'Ext.grid.filters.Filters',
        'hkCRM.view.t112.T112ListController',
        'Ext.selection.CellModel'
    ],

    title: '중지',
    controller: 'T112List',
    store: {
        type: 'T112SStore'
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
    	 type: 'cellmodel'
    },
    plugins: {
        gridfilters: true,
        cellediting: {
            clicksToEdit: 1
        }
    }, 
    
    columns: [ 
    	{ text: '매체명', dataIndex: 'MEDINM', width:70 
        }, 
    	{ text: '계약번호', dataIndex: 'CNTRNO', width:60
        }, 
    	{ text: '구분', dataIndex: 'FREEYNNM', width:40 
        }, 
    	{ text: '부수', dataIndex: 'SUBSQTY', width:40
    	},
    	{ text: '유가월', dataIndex: 'VALMM', width:50
    	},
        { text: '확장일자', dataIndex: 'EXTNDT',  width:70  
        	,renderer: Ext.util.Format.dateRenderer('Y-m-d')
        },
        { text: '중지일자', dataIndex: 'SUSPDT',  width:70  
        	,renderer: Ext.util.Format.dateRenderer('Y-m-d')
        },
        { text: '중지사유', dataIndex: 'SUSPRESN', width:70
        } ,
        {
            xtype: 'actioncolumn', 
            width: 30,
            sortable: false,
            menuDisabled: true,
            items: [{ 
                iconCls: 'cell-editing-delete-row',
                tooltip: 'Delete Plant',
                handler: 'onCancle'
            }]
        }
    ],

    listeners: {
       // select: 'onItemSelected'
    }
});