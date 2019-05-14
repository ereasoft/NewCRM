/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  UI 기능 : App 메인 레이아웃  
 *  최초작성일 : 2019.01.29
 *  최종수정일 : 201901.29
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox', 
        'hkCRM.view.tm.TmMain',
        'hkCRM.view.main.MainController',
        'Ext.grid.plugin.CellEditing'
    ],

    controller: 'main',   
    viewModel: 'main',
    id:'main',
    layout: 'fit',
    bodyPadding: 0,  
    
    items: [{ xtype: 'tm-main', itemId: 'tmmain' } ],
    
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
