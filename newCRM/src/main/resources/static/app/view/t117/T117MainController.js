/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 휴독 - 메인
 *  기능정의 :  Controller
 *  참조테이블 : T117(휴독)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.t117.T117MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.T117Main',

    init: function(){
    	
    },
    
	onItemSelected: function(selModel, record, index, eOpts){
		//휴독정보 
		 var detail = this.lookupReference('detail');
      	 var frm = detail.getForm(); 
      	 var nowdate = Ext.Date.format(new Date(),'Ymd');
      	detail.lookupReference('regBtn').setText('수정');
      	detail.lookupReference('delBtn').setHidden(false) ;
     	 frm.setValues({
     		MEDICD: 'U',
     		MEDICD: record.get('MEDICD'),
     		BOCNFMYN: (record.get('RECPDT') == 'Y')? true : false,
     		QTY: record.get('QTY'),
     		REGNO: record.get('REGNO'),
     		REGDT: Ext.Date.format(record.get('REGDT'),'Ymd'),
     		RDR_NO: record.get('RDR_NO'),
     		TEMP_STOPCLSFCD: record.get('TEMP_STOPCLSFCD'),
     		DLVDT: record.get('DLVDT'),
     		SUSPFRDT: (record.get('SUSPFRDT') == null)? nowdate : record.get('SUSPFRDT'), 
     		SUSPTODT: record.get('SUSPTODT'), 
     		BGNMAPPLI: record.get('BGNMAPPLI'),
     		ENDMAPPLI: record.get('ENDMAPPLI') ,
     		REMK: record.get('REMK'),
     		BOREMK: record.get('BOREMK') ,
     		CNS_EMPREMK: record.get('CNS_EMPREMK') ,
     		CNS_EMPCNFMYN: record.get('CNS_EMPCNFMYN') 
     	 });
	}
  
    
});
