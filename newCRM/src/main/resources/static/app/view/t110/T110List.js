/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 민원조회
 *  기능정의 :  Grid
 *  참조테이블 : T110
 *  최초작성일 : 2019.02.13
 *  최종수정일 : 2019.02.13
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.t110.T110List', {
    extend: 'Ext.grid.Panel',
    xtype: 't110-list',

    requires: [
        'hkCRM.store.T110Store', 
        'Ext.grid.filters.Filters',
        'hkCRM.view.t110.T110ListController'
    ],

    title: '민원조회',
    controller: 'T110List',
    store: {
        type: 'T110Store'
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
    	{ text: '접수일자', dataIndex: 'ACPNDT', width:80
    		 ,renderer: Ext.util.Format.dateRenderer('Y-m-d')
        }, 
        { text: '경로', dataIndex: 'ACPNPATHNM',  width:80  
        },
        { text: '분류', dataIndex: 'DSCTTYPENM', width:80
        },
    	{ text: '제목', dataIndex: 'TITL', width:200
        },
    	{ text: '처리', dataIndex: 'BOPROCYN', width:35  
        },
        { text: '확인', dataIndex: 'CNS_EMPCNFMYN', width:35
        },
        { text: '접수자', dataIndex: 'CNS_EMPACPNFLNM', width:50  
        },
        { text: '확인자', dataIndex: 'CNS_EMPCNFMFLNM', width:50  
        },
        { text: '처리일자', dataIndex: 'BOPROCDT', width:80
   		 ,renderer: Ext.util.Format.dateRenderer('Y-m-d')
       },
       { text: '확인일자', dataIndex: 'CNS_EMPCNFMDT', width:80
   		 ,renderer: Ext.util.Format.dateRenderer('Y-m-d')
       }
    ],

    listeners: {
       // select: 'onItemSelected'
    }
});