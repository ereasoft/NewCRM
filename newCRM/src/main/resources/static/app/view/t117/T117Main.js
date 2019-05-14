/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 휴독 - 메인
 *  기능정의 :  Main panel
 *  참조테이블 : T117(휴독)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.view.t117.T117Main', {
    extend: 'Ext.panel.Panel',
    xtype: 't117-main',

    requires: [   
        'hkCRM.view.t117.T117MainController'
    ], 
    controller: 'T117Main',     
    
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    }, 
    
    items: [
    	{ xtype: 't117-list', reference:'list', header:false, flex:1,
    		margin: '0 0 0 0',
    		listeners: {
    		    select: 'onItemSelected'
    		    }
    	} ,
    	{ xtype: 't117-detail', reference:'detail', header:false, 
    		margin: '0 0 0 0', height:300}  
    ]
});
