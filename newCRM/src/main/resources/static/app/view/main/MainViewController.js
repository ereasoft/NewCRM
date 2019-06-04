
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

    	if (titleNm == "공통코드")
   		{
        	var win = Ext.create( "hkCRM.view.adm.AdmCode", {
                title: '공통코드', height: 800, width: 1400, modal: false
            } );	
   		}
    	else if (titleNm == "일반독자")
   		{
        	var win = Ext.create( "hkCRM.view.slrdr.slRdr1100", {
                title: '일반독자', height: 800, width: 1600, modal: false
            } );	
   		}
    	else if (titleNm == "대학생독자")
   		{
        	var win = Ext.create( "hkCRM.view.slrdr.slRdr2400", {
                title: '대학생독자', height: 800, width: 1600, modal: false
            } );	
   		}
    	else if (titleNm == "이사독자관리")
   		{
        	var win = Ext.create( "hkCRM.view.slrdr.slRdr1300", {
                title: '이사독자관리', height: 800, width: 1600, modal: false
            } );	
   		}
    	else if (titleNm == "휴독관리")
   		{
        	var win = Ext.create( "hkCRM.view.slrdr.slRdr1500", {
                title: '휴독관리', height: 800, width: 1600, modal: false
            } );	
   		}
    	else if (titleNm == "중지독자관리")
   		{
        	var win = Ext.create( "hkCRM.view.slrdr.slRdr1600", {
                title: '중지독자관리', height: 800, width: 1600, modal: false
            } );	
   		}
    	else if (titleNm == "민원관리")
   		{
        	var win = Ext.create( "hkCRM.view.slrdr.slRdr1700", {
                title: '민원관리', height: 800, width: 1600, modal: false
            } );	
   		}
    	else if (titleNm == "지로EDI")
   		{
        	var win = Ext.create( "hkCRM.view.amt.ssAmt1000", {
                title: '지로EDI', height: 800, width: 1600, modal: false
            } );	
   		}
    	else if (titleNm == "지로발행(일괄)")
   		{
        	var win = Ext.create( "hkCRM.view.amt.slAmt1700", {
                title: '지로발행(일괄)', height: 800, width: 1600, modal: false
            } );	
   		}
    	else if (titleNm == "지로발행(낱장)")
   		{
        	var win = Ext.create( "hkCRM.view.amt.slAmt2000", {
                title: '지로발행(낱장)', height: 800, width: 1600, modal: false
            } );	
   		}
    	else if (titleNm == "자동이체신청")
   		{
        	var win = Ext.create( "hkCRM.view.amt.ssAmt1300", {
                title: '자동이체신청', height: 800, width: 1600, modal: false
            } );	
   		}
    	else if (titleNm == "신청작업관리")
   		{
        	var win = Ext.create( "hkCRM.view.amt.ssAmt1400", {
                title: '신청작업관리', height: 800, width: 1600, modal: false
            } );	
   		}
    	else if (titleNm == "승인오류목록")
   		{
        	var win = Ext.create( "hkCRM.view.amt.ssAmt3000", {
                title: '승인오류목록', height: 800, width: 1600, modal: false
            } );	
   		}
    	else if (titleNm == "청구관리")
   		{
        	var win = Ext.create( "hkCRM.view.amt.ssAmt1600", {
                title: '청구관리', height: 800, width: 1600, modal: false
            } );	
   		}
    	else if (titleNm == "휴대폰자동이체")
   		{
        	var win = Ext.create( "hkCRM.view.amt.ssAmt3800", {
                title: '휴대폰자동이체', height: 800, width: 1600, modal: false
            } );	
   		}    	
    	else if (titleNm == "카드청구(기존)")
   		{
        	var win = Ext.create( "hkCRM.view.amt.ssAmt2800", {
                title: '카드청구(기존)', height: 800, width: 1600, modal: false
            } );	
   		}    	
    	else if (titleNm == "카드청구(신규)")
   		{
        	var win = Ext.create( "hkCRM.view.amt.ssAmt4300", {
                title: '카드청구(신규)', height: 800, width: 1600, modal: false
            } );	
   		}    	
    	else if (titleNm == "독자환불관리")
   		{
        	var win = Ext.create( "hkCRM.view.amt.ssAmt3200", {
                title: '독자환불관리', height: 800, width: 1600, modal: false
            } );	
   		}  
    	else if (titleNm == "지국송금이체")
   		{
        	var win = Ext.create( "hkCRM.view.amt.ssAmt2600", {
                title: '지국송금이체', height: 800, width: 1600, modal: false
            } );	
   		}  
    	else if (titleNm == "공통코드")
   		{
        	var win = Ext.create( "hkCRM.view.amt.ssAdm1000", {
                title: '공통코드', height: 800, width: 1600, modal: false
            } );	
   		}  
    	
    	
    	//win.lookupReference('jobcls').getStore().loadData(obj.jobclsflist); 
    	
    	win.show();
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

