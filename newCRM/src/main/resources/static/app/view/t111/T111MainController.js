/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 구독정보 - 메인
 *  기능정의 :  Controller
 *  참조테이블 : T111(신문구독), T112(신문구독계약)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.t111.T111MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.T111Main',

    init: function(){
    	
    },  
    
	onItemSelected: function(selModel, record, index, eOpts){ 
        var frm =  this.lookupReference('detail').getForm();  
        var rdr_no = record.get('RDR_NO');
        var sessionkey = sessionStorage.getItem("sessionkey");
        var loginID = sessionStorage.getItem("loginID");
        
		Ext.Ajax.request( {  //구독정보 상세
            url: '/api/rdr/getRdr1012',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },  
            jsonData: { 
            	rdr_no: rdr_no ,
            	medicd: record.get('MEDICD') ,
            	cntrno: record.get('CNTRNO') ,
            	mangno: record.get('MANGNO') , 
				loginID:loginID,
				sessionkey: sessionkey
            },
            success: function ( response, opts )
            {
                var obj = Ext.decode( response.responseText );
                if ( obj.status == 'true' )
                {  
               	 //구독정보
               	    var reader = obj.cursubscntrlist[0];  
                	  
                    frm.findField('CLAMTMTHDCD').getStore().loadData(obj.commcdcur1);
                    frm.findField('FREECLSF').getStore().loadData(obj.commcdcur2);
                    frm.findField('EXTNTYPECD').getStore().loadData(obj.commcdcur3);
                    frm.findField('MEDICD').getStore().loadData(obj.medicdcur); 
                    var nowdate = Ext.Date.format(new Date(),'Ymd');
                    
                    frm.setValues({  
                    	RDR_NO: reader.RDR_NO,
                    	MEDICD: reader.MEDICD,
                    	SUBSQTY: reader.SUBSQTY,
                    	SUBSUPRC: reader.SUBSUPRC,
                    	VALMM: reader.VALMM,
                    	FREEYN: reader.FREEYN,
                    	FREECLSF: reader.FREECLSF,
                    	DSCNAMT: reader.DSCNAMT,
                    	CLAMTMTHDCD: reader.CLAMTMTHDCD,
                    	EXTNDT:  (record.get('SUSEXTNDTPFRDT') == null)? nowdate : record.get('EXTNDT'), 
                    	EXTNTYPECD:  reader.EXTNTYPECD, 
                    	EXTNPERSNM:  reader.EXTNPERSNM, 
                    	CLAMTCYCLCD:  reader.CLAMTCYCLCD, 
                    	SUBSFRDT:  reader.SUBSFRDT, 
                    	PDLVFEE:  reader.PDLVFEE
               	 });

                } else
                {
                    Ext.Msg.alert( 'Failed', obj.errmsg, function () { return false; } );
                }
            },

            failure: function ( response, opts )
            {
                Ext.Msg.alert( 'System Error', response.status, function () { return false; } );
            }
        } );
	}
  
    
});
