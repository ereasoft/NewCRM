/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 구독정보 - 메인
 *  기능정의 :  Main panel
 *  참조테이블 : T111(신문구독), T112(신문구독계약)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.t111.T111Main', {
    extend: 'Ext.panel.Panel',
    xtype: 't111-main',

    requires: [   
        'hkCRM.view.t111.T111MainController'
    ], 
    controller: 'T111Main',     
    
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    
    bodyPadding: 0,   
    
    items: [
    	{ xtype: 't111-list', reference:'list', header:false, flex:1,
    		listeners: {
    		    select: 'onItemSelected'
    		    }
    	} ,
    	{ xtype: 't111-detail', reference:'detail', header:false, height:250}    
    ]
});
