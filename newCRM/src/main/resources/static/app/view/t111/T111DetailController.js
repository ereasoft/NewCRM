/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 구독계약정보
 *  기능정의 :  Controller
 *  참조테이블 : T111(신문구독), T112(신문구독계약)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.t111.T111DetailController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.T111Detail',

    init: function(){
    	 
    },
    
    changeSubsuprc: function(pl,newVal,oldVal,eOpts){
    	var val = '';
    	if(pl.getSelectedRecord() != null) val = pl.getSelectedRecord().data.MANGITEM1;
    	this.lookupReference('SUBSUPRC').setValue(val);
    } ,
    
    frmReset: function(){
    	this.getView().getForm().reset();
    	this.getView().getForm().findField('EXTNDT').setValue(Ext.Date.format(new Date(),'Ymd'));
    }
    
	
    
});
