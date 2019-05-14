/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : TM 메인 레이아웃  
 *  기능정의 :  View
 *  최초작성일 : 2019.01.29
 *  최종수정일 : 201901.29
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.tm.TmMain', {
    extend: 'Ext.panel.Panel',
    xtype: 'tm-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox', 
        'hkCRM.view.tm.TmMainController'
    ],

    controller: 'tmmain',   
    viewModel: 'main',

    id: 'tmmain',
    
    layout: 'border',
    
    defaults: {
        bodyPadding: 10
        ,collapsible: true
       , split: true
    },

    items: [{
        //title: 'Content', 
    	bodyPadding: 0,
        region: 'center',
        collapsible: false,
        xtype : 'rdrgroup-main',
        reference:'rdrgroup'
    }, {
        title: '추가정보',  
        glyph: 'f05a@FontAwesome',
        region: 'east',
        width: 550,
        minWidth: 460,
        bodyPadding: 0,
        layout:'accordion',
        items:[
        	{ xtype:'t114-main' , title:'수금내역',reference:'t114'},
        	{ xtype:'t111-main' , title:'구독추가',reference:'t111'},
        	{ xtype:'t112-main' , title:'중지',reference:'t112'},
        	{ xtype:'t501-main' , title:'이사',reference:'t501'},
        	{ xtype:'t212-main' , title:'이체신청',reference:'t212'},
        	{ xtype:'t117-main' , title:'휴독',reference:'t117'}
        ]
    }, {
        title: '민원내역', 
        glyph: 'f044@FontAwesome', 
        region: 'south',
        maxHeight: 270, 
        bodyPadding: 0,
        layout:{
        	type: 'hbox',
            pack: 'start',
            align: 'stretch'
        },
        items:[
        	{ xtype:'t110-list', header:false, reference:'t110List', flex:1, 
                listeners: {
               	 select: 'onItemSelected'
                }
        	},
        	{ 
        		xtype:'t110-detail',  header:false, flex:2,  reference:'t110Detail',
        		bodyPadding: 10 
        	}
        ]
    } ]
});
