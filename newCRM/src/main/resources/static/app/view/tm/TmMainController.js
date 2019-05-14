/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : TM 메인 레이아웃  
 *  기능정의 :  Controller
 *  최초작성일 : 2019.01.29
 *  최종수정일 : 201901.29
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.tm.TmMainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.tmmain',

	 onItemSelected: function(selModel, record, index, eOpts)
	 { 
		 var sessionkey = sessionStorage.getItem("sessionkey");
	      var loginID = sessionStorage.getItem("loginID");
	      
		 Ext.Ajax.request( {  
             url: '/api/t110/getRdr1052',
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json', 
             },  
             jsonData: {
                 regdt: Ext.util.Format.date(record.get('REGDT'), 'Ymd') ,
                 regno: record.get('REGNO') ,
			  	loginID:loginID,
			 	sessionkey: sessionkey
             },
             success: function ( response, opts )
             {
                 var obj = Ext.decode( response.responseText );
                 if ( obj.status == 'true' )
                 {  
                	 //민원상세정보
                	 var reader = obj.dsctcur[0]; 
                 	 var frm = Ext.getCmp('tmmain').lookupReference('t110Detail').getForm();
                	 frm.setValues({
                		 ACCFLAG: 'U',
                		 USERFLAG: '30',
                		 BOCD: reader. BOCD,
                		 REGNO: reader. REGNO,
                		 REGDT: reader. REGDT,
                		ACPNDT: Ext.Date.parse(reader.ACPNDT,'Ymd'), 
                		DSCTTYPECD: reader. DSCTTYPECD,
                		ACPNPATHCD: reader.ACPNPATHCD,
                		BOPROCYN: (reader.BOPROCYN == 'Y') ? true : false,
                		CNS_EMPCNFMYN: (reader.CNS_EMPCNFMYN == 'Y') ? true : false,
                		TITL: reader.TITL,
                		CONT: reader.CONT,
                		BOPROCCONT: reader.BOPROCCONT,
                		CNS_EMPCNFMREMK: reader.CNS_EMPCNFMREMK
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
