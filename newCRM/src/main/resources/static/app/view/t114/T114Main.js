/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 수금정보 - 메인
 *  기능정의 :  Main panel
 *  참조테이블 : T111(신문구독), T114(신문구독수금), T914(전사공통코드)
 *  최초작성일 : 2019.02.13
 *  최종수정일 : 2019.02.13
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.t114.T114Main', {
    extend: 'Ext.panel.Panel',
    xtype: 't114-main',

    requires: [   
        'hkCRM.view.t114.T114MainController'
    ], 
    controller: 'T114Main',     
    
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    
    bodyPadding: 0,   
    
    items: [
    	{ 
    		xtype: 't114-list', reference:'list', header:false, flex:1,
    		 listeners: {
               	 select: 'onItemSelected'
                }
    	} ,
    	{ xtype: 't114-detail', reference:'detail', header:false, height:150}   
    ]
});
