
/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : App 메인 레이아웃  
 *  기능정의 :  Controller
 *  최초작성일 : 2019.01.29
 *  최종수정일 : 201901.29
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.main.MainViewController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.mainView',

    init: function(){
    	
    	
    },
    
    goUrl : function(){ 
    	var url = '/index.html';
    	if(tm_flag) url =  '/indexTm.html';
    	var openNewWindow = window.open("about:blank"); 
    	openNewWindow.location.href = url + '?tmFull=Y';
    },
    
    menuClick: function ( xtypeNm, titleNm )
    {

        var tabs = Ext.getCmp( 'mainView' ).down( '#content' );
        var id = xtypeNm;
        var tab = tabs.items.getByKey( id );
        var cfg = {
            xtype: xtypeNm,
            title: titleNm
        }
        if ( !tab )
        {
            cfg.itemId = id;
            cfg.closable = true;
            tab = tabs.add( cfg );
        }
        tabs.setActiveTab( tab );
        
    },
    
    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
     

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});

