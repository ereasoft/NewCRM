/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  UI 기능 : App 메인 레이아웃  
 *  최초작성일 : 2019.01.29
 *  최종수정일 : 201901.29
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.main.MainView', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainView',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',  
        'hkCRM.view.main.MainViewController', 
    ],

    controller: 'mainView',    
    id:'mainView',
    layout: 'border', 
    bodyBorder: true,
    defaults: {
        bodyPadding: 0,
        collapsible: true,
        split: true
    },
    
    tbar : {
    	overflowHandler: 'menu', 
        items: [
    		 { 
    		    xtype: 'panel', 
                html: '<img src=\"resources/images/hm_logo_local.gif\" style=\"width:150;height:34px;\"/>',
    		},
    		  '->', 
    		  { 
    			xtype: 'button',
    	        text: loginNm,
    			}, 
    		 '-', 
    		 {
      	       xtype: 'button',
      			iconCls: 'fa fa-file-pdf-o',  
      			text: '매뉴얼' 
      	   },
    		 {
    	       xtype: 'button',
    			iconCls: 'x-fa fa-sign-out',
    			text: '로그아웃',
    	   }
       ]
    },
    
    items: [
    	{
            title: 'Menu',
            glyph: 'f044@FontAwesome', 
            region: 'west',
            minWidth: 120,
            layout: {
            	type: 'vbox',
                pack: 'start',
                align: 'stretch'
            },
            items: [
            	{ xtype: 'button', text: '민원종합화면', handler:'goUrl'},
            	{ xtype: 'button', text: '지동이체'}
            ]
        },
        {
            header: false,
            itemId: 'content',
            xtype: 'tabpanel',
            bodyPadding: 0,
            region: 'center',
            defaults: { 
                split: true 
            }
        },
        {
            title: 'SIDE',
            glyph: 'f05a@FontAwesome',
            region: 'east',
            minWidth: 100
             
        }
   ],
    
    listeners: {
    	//beforerender  : 'beforerender',
    	//beforeactivate:  function(){
    	//	loadMask(this,true,'Loading ...');
    	//},
    	//activate: function(){ 
    		//loadMask(this,false,null);
    	//}
     }
});