/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 이사정보 - 메인
 *  기능정의 :  Controller
 *  참조테이블 : T501(이사독자)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.t501.T501MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.T501Main',

    init: function(){
    	
    },
    
    onItemSelected: function(selModel, record, index, eOpts){
    	 var detail = this.lookupReference('detail');
      	 var frm = detail.getForm(); 
         var sessionkey = sessionStorage.getItem("sessionkey");
         var loginID = sessionStorage.getItem("loginID");
      	 
      	detail.lookupReference('regBtn').setText('수정');
      	detail.lookupReference('delBtn').setHidden(false) ;
    	Ext.Ajax.request( {  
            url: '/api/rdr/getRdr1042',
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
               	 //이사내역
                	
               	 var reader = obj.moverdrcur[0];  
               	var ZipCode = reader.MOVMZONECODE;
               	if(ZipCode == null){
	           		 ZipCode = reader.MOVMZIP1; 
	           		 if(reader.MOVMZIP1) ZipCode +=  '-' + reader.MOVMZIP2;
               	}
               	 frm.setValues({
               		 ACCFLAG: 'U',
               		 //USERFLAG: '30', 
               		 REGNO: reader. REGNO,
               		 REGDT: reader. REGDT, 
               		ACPTBOCD: reader. ACPTBOCD,
               		ACPTBO_TEL: reader. ACPTBO_TEL,
               		MOVMTEL_NO1: reader. MOVMTEL_NO1,
               		MOVMTEL_NO2: reader. MOVMTEL_NO2,
               		MOVMTEL_NO3: reader. MOVMTEL_NO3,
               		MOVEDT: Ext.Date.parse(reader.MOVEDT,'Ymd'), 
               		RDRPTPH_NO1: reader. RDRPTPH_NO1,
               		RDRPTPH_NO2: reader. RDRPTPH_NO2,
               		RDRPTPH_NO3: reader. RDRPTPH_NO3,
               		DLVHOPEDT: Ext.Date.parse(reader.DLVHOPEDT,'Ymd'), 
               		MOVMBNJI: reader. MOVMBNJI,
               		ACPTBONM: reader. ACPTBONM, 
               		MOVMZONECODE: ZipCode, 
               		MOVMADDR_DO: reader. MOVMADDR_DO,
               		MOVMADDR: reader. MOVMADDR,
               		MOVMDTLSADDR: reader. MOVMDTLSADDR,
               		REMK: reader. REMK
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
