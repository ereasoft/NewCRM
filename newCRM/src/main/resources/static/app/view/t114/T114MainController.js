/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 수금정보 - 메인
 *  기능정의 :  Controller
 *  참조테이블 : T111(신문구독), T114(신문구독수금), T914(전사공통코드)
 *  최초작성일 : 2019.02.13
 *  최종수정일 : 2019.02.13
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.t114.T114MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.T114Main',

    init: function(){
    	
    },
    
	onItemSelected: function(selModel, record, index, eOpts)
	{
		//수금정보 
       	 var frm = this.lookupReference('detail').getForm(); 
       	 var nowdate = Ext.Date.format(new Date(),'Ymd');
      	 frm.setValues({
      		SUBSMAPPLI: record.get('SUBSMAPPLI'),
      		CLAMAMT: record.get('CLAMAMT'),
      		RECPDT: (record.get('RECPDT') == null)? nowdate : record.get('RECPDT'),
      		CLAMT: (record.get('CLAMT') == 0)? record.get('CLAMAMT') : record.get('CLAMT'),
      		CLAMTMTHDCD: record.get('CLAMTMTHDCD'),
      		RCPMCLSFCD: '010'//record.get('RCPMCLSFCD') 
      	 });
	}
    
  
    
});
