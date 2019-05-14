/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 독자정보 메인 레이아웃  
 *  기능정의 :  View
 *  최초작성일 : 2019.01.29
 *  최종수정일 : 201901.29
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.tm.RdrGroup', {
    extend: 'Ext.panel.Panel',
    xtype: 'rdrgroup-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox', 
        'hkCRM.view.tm.RdrGroupController',
        'Ext.layout.container.VBox'
    ],

    controller: 'rdrgroupmain',   
    viewModel: 'main',
    
    layout: {
    	type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    
    defaults: {
        bodyPadding: 5,
        frame: false 
    },

    items: [{
    	 title: '독자조회',
    	 glyph: 'f03a@FontAwesome', 
         bodyPadding: 0,
         collapsible: true, 
         flex:1,
         minHeight:150,
         margin: '0 0 0 0',
         xtype: 'rdr-list',
         reference: 'rdrlist',
         listeners: {
             select: 'onItemSelected'
         }
    }, {
    	 title: '독자정보',
    	 header: false,
    	 xtype:'tabpanel',
    	 glyph: 'f2bb@FontAwesome', 
         height:210,
         collapsible: true,
         margin: '0 0 0 0', 
         items:[
        	 { xtype: 'rdr-detail', reference: 'detail'},
        	 { xtype: 'rdr-detail-etc', reference: 'etc'}
         ]
        
    } , {
   	 title: '매체정보',
	 glyph: 'f1ea@FontAwesome',
     height:130,
     header: false,
	 xtype:'tabpanel',
     collapsible: true,
     margin: '0 0 0 0',
     minHeight:100,
     reference: 'medias',
     items:[
    	// {xtype: 'subscribe-detail'}
     ],
     listeners: {
    	 tabchange: 'onTabChange' 
     }
}, {
	 title: '구독처',
	 glyph: 'f2b5@FontAwesome', 
     collapsible: true,
     margin: '0 0 0 0',
     minHeight:100,
     reference: 'infra',
     xtype: 'infra-detail'
} ]
});
