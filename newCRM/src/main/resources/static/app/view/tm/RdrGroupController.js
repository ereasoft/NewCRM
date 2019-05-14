/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 독자 메인 레이아웃  
 *  기능정의 :  Controller
 *  최초작성일 : 2019.01.29
 *  최종수정일 : 201901.29
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.tm.RdrGroupController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.rdrgroupmain',

    onTabChange: function(tabs, newTab, oldTab) {
    	
    	hkCRM.config.Config.setTmMediaCd(newTab.cls); 
        var sessionkey = sessionStorage.getItem("sessionkey");
        var loginID = sessionStorage.getItem("loginID");
        
    	if(oldTab != undefined) //매체탭 선택한 경우
    	{
    		Ext.Ajax.request( {   //매체정보
                url: '/api/rdr/getRdr1003',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },  
                jsonData: {
                	bocd: hkCRM.config.Config.getTmBoCd(),
	                rdr_no: hkCRM.config.Config.getTmRdrNo(),
                    medicd: newTab.cls,
                    loginID:loginID,
					sessionkey: sessionkey
                },
                success: function ( response, opts )
                { 
                	 var obj = Ext.decode( response.responseText ); 
                    if ( obj.status == 'true' )
                    {    
                    	var mds = obj.medikindcur;
                        var obj = Ext.decode( response.responseText ); 
                        var rptvmedicd = hkCRM.config.Config.setTmSelMediaCd(newTab.cls); 
                    	var rptvYn = 'N'; 
                    	for(var i=0;i<mds.length;i++){
                   		 if(mds[i].MEDICD == rptvmedicd) 
                   			 {  
                   			 	rptvYn = 'Y';
                   			 } 
                   	 }
                    	
                       	 var rdrmd = obj.rdrmedicur[0];
                       	 var frm = newTab.getForm();
                       	 
                       	 frm.findField('RPTVFREECLSF').getStore().loadData(obj.commcdcur1);
                            frm.findField('CLAMTMTHDCD').getStore().loadData(obj.commcdcur2);
                            frm.findField('RPTVEXTNTYPE').getStore().loadData(obj.commcdcur3);
                            frm.findField('RPTVSUSPRESNCD').getStore().loadData(obj.commcdcur4);
                            
                       	 frm.setValues({ 
                       		RDR_NO: hkCRM.config.Config.getTmRdrNo(),
                       		RPTVMEDIyn: rptvYn,
                       		VALQTY: rdrmd.VALQTY,
                       		PRE_VALQTY: rdrmd.PRE_VALQTY,
                       		NO_VALQTY: rdrmd.NO_VALQTY,
                       		RPTVFREECLSF: rdrmd.RPTVFREECLSF,
                       		SUBSAMT: rdrmd.SUBSAMT,
                       		REALSUBSAMT: rdrmd.REALSUBSAMT,
                       		DSCNAMT: rdrmd.DSCNAMT,
                       		PDLVFEE: rdrmd.PDLVFEE,
                       		RPTVEXTNDT: rdrmd.RPTVEXTNDT,
                       		RPTVSUBSDT: Ext.Date.parse(rdrmd.RPTVSUBSDT,'Ymd'),
                       		CLAMTMTHDCD: rdrmd.CLAMTMTHDCD,
                       		UNRCPAMT: rdrmd.UNRCPAMT,
                       		RPTVVALMM: rdrmd.RPTVVALMM,
                       		RPTVEXTNTYPE: rdrmd.RPTVEXTNTYPE,
                       		RPTVVALMM: rdrmd.RPTVVALMM,
                       		RPTVSUSPDT: rdrmd.RPTVSUSPDT,
                       		RPTVSUSPRESNCD: rdrmd.RPTVSUSPRESNCD, 
                       		CLAMTCYCLCD: rdrmd.CLAMTCYCLCD
                       	 });   
                    } 
                    else
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
    	var pl = Ext.getCmp('tmmain').lookupReference('t114')
    	var list =pl.lookupReference('list');
    	pl.setTitle('['+newTab.title+']수금내역'); 
    	list.getController().onListUp(newTab.cls, null ); 
    } ,
    
    onItemSelected: function(selModel, record, index, eOpts){
    	 
    	 var nowdate = Ext.Date.format(new Date(),'Ymd'); 
         var sessionkey = sessionStorage.getItem("sessionkey");
         var loginID = sessionStorage.getItem("loginID");
         
    	 hkCRM.config.Config.setTmRdrNo(record.get('RDR_NO') );
    	 hkCRM.config.Config.setTmRdrNm(record.get('RDRNM') );
    	 hkCRM.config.Config.setTmBoCd(record.get('BOCD') );
    	 hkCRM.config.Config.setTmMediaCd(record.get('RPTVMEDICD') ); //대표매체
    	//민원상세화면 초기화
    	 var t110DetailFrm = Ext.getCmp('tmmain').lookupReference('t110Detail').getForm();
    	 t110DetailFrm.reset();
    	 t110DetailFrm.findField('ACCFLAG').setValue('I');
    	 t110DetailFrm.findField('USERFLAG').setValue('30');
    	 t110DetailFrm.findField('ACPNPATHCD').setValue('30'); 
    	 
    	 t110DetailFrm.findField('ACPNDT').setValue(nowdate); 
    	 
    	 Ext.getCmp('tmmain').lookupReference('t110List').getView().getStore().load( { 
    		params:
					{   
    					rdr_no: record.get('RDR_NO') ,
    					loginID:loginID,
    					sessionkey: sessionkey
	                 } ,
	         scope: this,
	         callback: function(records, operation, success) {
	             if (success) {
	            	 var obj = operation._response.responseJson;
	            	 if(obj ==undefined ){ //IE11 예외처리
	            		 obj = Ext.JSON.decode(operation._response.responseText)
	            	 }
	            	 t110DetailFrm.findField('DSCTTYPECD').getStore().loadData(obj.commcdcur1);
	            	 t110DetailFrm.findField('ACPNPATHCD').getStore().loadData(obj.commcdcur2);
	            	 if(obj.errmsg != null){Ext.Msg.alert('Failed', obj.errmsg);}   
	             } else {
	            	 var obj = operation.error.response.responseJson
	            	 if(obj ==undefined ){ //IE11 예외처리
	            		 obj = Ext.JSON.decode(operation.error.response.responseText)
	            	 }
	            	 Ext.Msg.alert('Failed', obj.message);
	             }
	         }
		}); 
    	 
    	 Ext.Ajax.request( {  
             url: '/api/rdr/getRdr1002',
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json', 
             },  
             jsonData: {
                 bocd: record.get('BOCD') ,
                 rdr_no: record.get('RDR_NO') ,
				loginID:loginID,
				sessionkey: sessionkey
             },
             success: function ( response, opts )
             {
                 var obj = Ext.decode( response.responseText );
                 if ( obj.status == 'true' )
                 {  
                	 //독자상세정보
                	 var reader = obj.readercur[0];
                	 var ZipCode = reader.DLVZONECODE;
                	 if(ZipCode == null){
                		 ZipCode = reader.DLVZIP1; 
                		 if(reader.DLVZIP1) ZipCode +=  '-' + reader.DLVZIP2;
                	 }
                	 var RDRTEL_NO = '';
                 	 if(reader.RDRTEL_NO1) RDRTEL_NO += reader.RDRTEL_NO1;
                     if(reader.RDRTEL_NO2) RDRTEL_NO += '-' + reader.RDRTEL_NO2;
                 	 if(reader.RDRTEL_NO3) RDRTEL_NO += '-' + reader.RDRTEL_NO3;
                 	 
                 	 var RDRPTPH_NO = '';
                 	 if(reader.RDRPTPH_NO1) RDRPTPH_NO += reader.RDRPTPH_NO1;
                     if(reader.RDRPTPH_NO2) RDRPTPH_NO += '-' + reader.RDRPTPH_NO2;
                 	 if(reader.RDRPTPH_NO3) RDRPTPH_NO += '-' + reader.RDRPTPH_NO3;
                  	 
                 	 var BOTELNO = '';
                 	 if(reader.BO_TEL_NO1) BOTELNO += reader.BO_TEL_NO1;
                     if(reader.BO_TEL_NO2) BOTELNO += '-' + reader.BO_TEL_NO2;
                 	 if(reader.BO_TEL_NO3) BOTELNO += '-' + reader.BO_TEL_NO3;      
                 	 
                 	 hkCRM.config.Config.setTmBoSeq(reader.BOSEQ );
                 	
                     var frm = Ext.getCmp('tmmain').lookupReference('rdrgroup').lookupReference('detail').getForm();
                     var target =  Ext.getCmp('tmmain').lookupReference('rdrgroup').lookupReference('detail').lookupReference('ONMBRIDTYPE');
             
                 	 var IDtype = '(일반독자)';
                 	 var loginType = '1';
                 	 if(reader.COUEXTNPERSID) {
                 		 IDtype = '(기업독자)';
                 		loginType = '0';
                 		 frm.findField('ONMBRPW').setReadOnly(false);
                 	 }
                     
                     frm.findField('DLVDSTCCD').getStore().loadData(obj.dstccdcur);
                     frm.findField('DLVMTHDCD').getStore().loadData(obj.commcdcur4);
                     frm.findField('RDRTEL_NO1').getStore().loadData(obj.telnocur);
                     frm.findField('RDRPTPH_NO1').getStore().loadData(obj.ptphnocur);
                     
                     var loginhis = obj.commcdcur6;
                     var htmlStr= '<ul style="list-style-type : decimal ">';
                     if(loginhis.length > 0){
                    	 for(i=0;i<loginhis.length;i++){
                        	 htmlStr += '<li>'+Ext.Date.format(Ext.Date.parse(loginhis[i].ACDT),'Y-m-d H:i')+'</li>';
                         }
                         htmlStr += '</ul>';
                         this .tooltip = new Ext.tip.ToolTip({
                             defaultAlign: 't-b',
                             target: target,
                             html: htmlStr,
                             minWidth: 200,
                             title: '최근 로그인이력',  
                             anchor: true,
                             autoShow: false,
                             autoHide: true,
                             closable: false
                         }); 
                     }
                     
                     frm.setValues({
                		RDR_NO: record.get('RDR_NO'),
                	 	BONM: record.get('BONM'),
                	 	RDRNM: reader.RDRNM,
                	 	LOGINTYPE: loginType,
                	 	DLVDSTCCD: reader.DLVDSTCCD,
                	 	DLVNO: reader.DLVNO,
                	 	DLVINTVNO: reader.DLVINTVNO,
                	 	DLVMTHDCD: reader.DLVMTHDCD,
                	 	DLVZONECODE: ZipCode,
                	 	DLVADDR: reader.DLVADDR,
                	 	DLVADDR_DO: reader.DLVADDR_DO,
                	 	DLVDTLSADDR: reader.DLVDTLSADDR,
                	 	RDRTEL_NO1:  reader.RDRTEL_NO1,
                	 	RDRTEL_NO2:  reader.RDRTEL_NO2,
                	 	RDRTEL_NO3:  reader.RDRTEL_NO3,
                	 	RDRPTPH_NO1: reader.RDRPTPH_NO1,
                	 	RDRPTPH_NO2: reader.RDRPTPH_NO2,
                	 	RDRPTPH_NO3: reader.RDRPTPH_NO3, 
                	 	EMAIL: reader.EMAIL,
                	 	REMK: reader.REMK,
                	 	ONMBRID: reader.ONMBRID, 
                	 	WSJ_EMAIL: reader.WSJ_EMAIL, 
                	 	WSJ_LNAME: reader.WSJ_LNAME, 
                	 	WSJ_FNAME: reader.WSJ_FNAME, 
                	 	ONMBRIDTYPE: IDtype ,
                	 	SMSTRSMOBJYN: (reader.SMSTRSMOBJYN == 'Y') ? true : false,
                	 	BOTELNO:BOTELNO
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
    	 
    	 Ext.Ajax.request( {  //기타정보
             url: '/api/rdr/getRdr1006',
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json', 
             },  
             jsonData: {
                 bocd: record.get('BOCD') ,
                 rdr_no: record.get('RDR_NO') ,
				loginID:loginID,
				sessionkey: sessionkey
             },
             success: function ( response, opts )
             {
                 var obj = Ext.decode( response.responseText );
                 if ( obj.status == 'true' )
                 {  
                	 //기타정보
                	 var reader = obj.readercur[0];           
                     var frm = Ext.getCmp('tmmain').lookupReference('rdrgroup').lookupReference('etc').getForm();

                	 if(reader == null){
                		 frm.reset();
                	 }else{
                		 frm.findField('STDNCLSF').getStore().loadData(obj.commcdcur1);
                         frm.findField('SUBSSYNC').getStore().loadData(obj.commcdcur2);
                         frm.findField('SUBSPATH').getStore().loadData(obj.commcdcur3);
                         
                         frm.setValues({ 
                        	 APLCYY: (reader.APLCYY == null) ? '' : reader.APLCYY,
                        	 SCHLNM: (reader.SCHLNM== null) ? '' : reader.SCHLNM,
                        	 DEPTNM: (reader.DEPTNM== null) ? '' : reader.DEPTNM,
                        	 GRADE: (reader.GRADE== null) ? '' : reader.GRADE,
                        	 STDNNO: (reader.STDNNO== null) ? '' : reader.STDNNO,
                        	 STDNCLSF: (reader.STDNCLSF== null) ? '' : reader.STDNCLSF,
                        	 RECOMPROF: (reader.RECOMPROF== null) ? '' : reader.RECOMPROF,
                        	 SUBSSYNC: (reader.SUBSSYNC== null) ? '' : reader.SUBSSYNC,
                        	 SUBSPATH: (reader.SUBSPATH== null) ? '' : reader.SUBSPATH,
                        	 SUBSPATHREMK:  (reader.SUBSPATHREMK== null) ? '' : reader.SUBSPATHREMK,
                        	 ONEYYAGRMNTYN:  (reader.ONEYYAGRMNTYN== null) ? '' : reader.ONEYYAGRMNTYN,
                        	 SGSGSUBSYN:  (reader.SGSGSUBSYN== null) ? '' : reader.SGSGSUBSYN,
                        	 SWITDT: (reader.SWITDT== null) ? '' :  reader.SWITDT,
                        	 SWITPERS:  (reader.SWITPERS== null) ? '' :  reader.SWITPERS
                    	 });
                	 }
                     

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
    	 
    	 Ext.Ajax.request( {   //매체정보
             url: '/api/rdr/getRdr1003',
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json', 
             },  
             jsonData: {
                 bocd: record.get('BOCD') ,
                 rdr_no: record.get('RDR_NO'),
                 medicd: record.get('RPTVMEDICD') ,
				loginID:loginID,
				sessionkey: sessionkey
             },
             success: function ( response, opts )
             {
                 var obj = Ext.decode( response.responseText ); 
                 if ( obj.status == 'true' )
                 {  
                	 //매체상세정보
                	 var rptvmedicd = record.get('RPTVMEDICD') ; //대표매체
                	 var mds = obj.medikindcur;
                	 var tabpl = Ext.getCmp('tmmain').lookupReference('rdrgroup').lookupReference('medias');
            		 var activetab = 999999 ;
            		 var rptvYn = 'N';
                	 tabpl.removeAll(); 
                	 hkCRM.config.Config.setTmSelMediaCd(rptvmedicd ); //선택한 매체
                	 if(mds.length < 1){  //매체정보가 없는 경우, 수금내역 초기화 
                		 hkCRM.config.Config.setTmSelMediaCd('');
                		 var t114List = Ext.getCmp('tmmain').lookupReference('t114').lookupReference('list');
                		 var t114Tbar = t114List.lookupReference('tbar');
                		 var t114Detail =  Ext.getCmp('tmmain').lookupReference('t114').lookupReference('detail');
                		 t114List.getView().getStore().removeAll();
                		 t114Tbar.down('[name=brfcur]').setValue('');
                		 t114Tbar.down('[name=brfcur2]').setValue('');
                		 t114Tbar.down('[name=clamt]').setValue('');
                		 t114Detail.getForm().reset();
                	 }
                	 for(var i=0;i<mds.length;i++){
                		 if(mds[i].MEDICD == rptvmedicd) 
                			 { 
                			 	activetab = i;
                			 	rptvYn = 'Y';
                			 }
                		 tabpl.add({xtype:'subscribe-detail',title:mds[i].MEDINM,cls:mds[i].MEDICD});
                	 }
                	 if(activetab != 999999){
                		 tabpl.setActiveTab(activetab);
                    	 var rdrmd = obj.rdrmedicur[0];
                    	 var frm = tabpl.items.items[activetab].getForm();
                    	 
                    	 frm.findField('RPTVFREECLSF').getStore().loadData(obj.commcdcur1);
                         frm.findField('CLAMTMTHDCD').getStore().loadData(obj.commcdcur2);
                         frm.findField('RPTVEXTNTYPE').getStore().loadData(obj.commcdcur3);
                         frm.findField('RPTVSUSPRESNCD').getStore().loadData(obj.commcdcur4);
                         
                    	 frm.setValues({ 
                    		RDR_NO: record.get('RDR_NO'),
                    		RPTVMEDIyn: rptvYn,
                    		VALQTY: rdrmd.VALQTY,
                    		PRE_VALQTY: rdrmd.PRE_VALQTY,
                    		NO_VALQTY: rdrmd.NO_VALQTY,
                    		RPTVFREECLSF: rdrmd.RPTVFREECLSF,
                    		SUBSAMT: rdrmd.SUBSAMT,
                    		REALSUBSAMT: rdrmd.REALSUBSAMT,
                    		DSCNAMT: rdrmd.DSCNAMT,
                    		PDLVFEE: rdrmd.PDLVFEE,
                    		RPTVEXTNDT: rdrmd.RPTVEXTNDT,
                    		RPTVSUBSDT: Ext.Date.parse(rdrmd.RPTVSUBSDT,'Ymd'),
                    		CLAMTMTHDCD: rdrmd.CLAMTMTHDCD,
                    		UNRCPAMT: rdrmd.UNRCPAMT,
                    		RPTVVALMM: rdrmd.RPTVVALMM,
                    		RPTVEXTNTYPE: rdrmd.RPTVEXTNTYPE,
                    		RPTVVALMM: rdrmd.RPTVVALMM,
                    		RPTVSUSPDT: rdrmd.RPTVSUSPDT,
                    		RPTVSUSPRESNCD: rdrmd.RPTVSUSPRESNCD, 
                    		CLAMTCYCLCD: rdrmd.CLAMTCYCLCD
                    	 }); 
                	 } 
                	 
                 } 
                 else
                 {
                     Ext.Msg.alert( 'Failed', obj.errmsg, function () { return false; } );
                 }
             },

             failure: function ( response, opts )
             {
                 Ext.Msg.alert( 'System Error', response.status, function () { return false; } );
             }
         } );
    	
    	 if(record.get('COUEXTNPERSID') )
    	{
	    		Ext.Ajax.request( {  //구독처
	            url: '/api/adc/getAdc1003',
	            method: 'POST',
	            headers: {
	                'Content-Type': 'application/json', 
	            },  
	            jsonData: { 
	           	 coupcd: record.get('COUEXTNPERSID') ,
					loginID:loginID,
					sessionkey: sessionkey
	            },
	            success: function ( response, opts )
	            {
	                var obj = Ext.decode( response.responseText );
	                if ( obj.status == 'true' )
	                {  
	               	 //구독처
	               	 var reader = obj.curlist[0]; 
	                	 
	                    var frm = Ext.getCmp('tmmain').lookupReference('rdrgroup').lookupReference('infra').getForm();
	            
	                	  
	                    frm.findField('CLAMTMTHDCD').getStore().loadData(obj.commcdcur1);
	                    frm.findField('RDRGRAD').getStore().loadData(obj.commcdcur2);
	                    frm.findField('MEDICD').getStore().loadData(obj.commcdcur3); 
	                    var totmonth = Ext.Date.diff( Ext.Date.parse( reader.SETMONTH, 'Ym'), Ext.Date.parse( reader.SUBSTODT, 'Ym'), Ext.Date.MONTH) + 1;
	                    
	                    frm.setValues({ 
	                    	COUP_NO: reader.COUP_NO,
	                    	MEDICD: reader.MEDICD,
	                    	CLAMTMTHDCD: reader.CLAMTMTHDCD,
	                    	VALQTY: reader.VALQTY,
	                    	PRE_VALQTY: reader.PRE_VALQTY,
	                    	NO_VALQTY: reader.NO_VALQTY,
	                    	DLVQTY: reader.DLVQTY,
	                    	SETMONTH: reader.SETMONTH,
	                    	SUBSTODT: reader.SUBSTODT,
	                    	COMPNAME:  reader.COMPNAME,
	                    	TOT_MONTH:  totmonth
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
    	 
    	 Ext.getCmp('tmmain').lookupReference('t111').lookupReference('list').getView().getStore().load( { 
     		params:
 					{   
     					rdr_no: record.get('RDR_NO') ,
    					loginID:loginID,
    					sessionkey: sessionkey
 	                 } ,
 	         scope: this,
 	         callback: function(records, operation, success) {
 	             if (success) {
 	            	 var obj = operation._response.responseJson;
 	            	 if(obj ==undefined ){ //IE11 예외처리
 	            		 obj = Ext.JSON.decode(operation._response.responseText)
 	            	 }
 	            	 if(obj.errmsg != null){Ext.Msg.alert('Failed', obj.errmsg);}   
 	             } else {
 	            	 var obj = operation.error.response.responseJson
	            	 if(obj ==undefined ){ //IE11 예외처리
	            		 obj = Ext.JSON.decode(operation.error.response.responseText)
	            	 }
	            	 Ext.Msg.alert('Failed', obj.message);
 	             }
 	         }
 		});
    	 
   Ext.getCmp('tmmain').lookupReference('t112').lookupReference('list').getView().getStore().load( { 
      		params:
  					{   
      					rdr_no: record.get('RDR_NO') ,
    					loginID:loginID,
    					sessionkey: sessionkey
  	                 } ,
  	         scope: this,
  	         callback: function(records, operation, success) {
  	             if (success) {
  	            	 var obj = operation._response.responseJson;
  	            	 if(obj ==undefined ){ //IE11 예외처리
  	            		 obj = Ext.JSON.decode(operation._response.responseText)
  	            	 }
  	            	 if(obj.errmsg != null){Ext.Msg.alert('Failed', obj.errmsg);}   
  	             } else {
  	            	 var obj = operation.error.response.responseJson
	            	 if(obj ==undefined ){ //IE11 예외처리
	            		 obj = Ext.JSON.decode(operation.error.response.responseText)
	            	 }
	            	 Ext.Msg.alert('Failed', obj.message);
  	             }
  	         }
  		});
   
   var t112detail = Ext.getCmp('tmmain').lookupReference('t112').lookupReference('detail');
   t112detail.lookupReference('t112MdList').getView().getStore().load( { 
 		params:
					{   
 					rdr_no: record.get('RDR_NO') ,
					loginID:loginID,
					sessionkey: sessionkey
	                 } ,
	         scope: this,
	         callback: function(records, operation, success) {
	             if (success) {
	            	 var obj = operation._response.responseJson;
	            	 if(obj ==undefined ){ //IE11 예외처리
	            		 obj = Ext.JSON.decode(operation._response.responseText)
	            	 } 
	            	 t112detail.getForm().findField('SUSPRESNCD').getStore().loadData(obj.commcdcur1);
	            	 if(obj.errmsg != null){Ext.Msg.alert('Failed', obj.errmsg);}   
	             } else {
	            	 var obj = operation.error.response.responseJson
	            	 if(obj ==undefined ){ //IE11 예외처리
	            		 obj = Ext.JSON.decode(operation.error.response.responseText)
	            	 }
	            	 Ext.Msg.alert('Failed', obj.message);
	             }
	         }
		});

    	 Ext.getCmp('tmmain').lookupReference('t501').lookupReference('list').getView().getStore().load( { 
       		params:
   					{   
       					rdr_no: record.get('RDR_NO') ,
						loginID:loginID,
						sessionkey: sessionkey
   	                 } ,
   	         scope: this,
   	         callback: function(records, operation, success) {
   	             if (success) {
   	            	 var obj = operation._response.responseJson;
   	            	 if(obj ==undefined ){ //IE11 예외처리
   	            		 obj = Ext.JSON.decode(operation._response.responseText)
   	            	 }
   	            	var frm = Ext.getCmp('tmmain').lookupReference('t501').lookupReference('detail').getForm();                     	  
                   
   	            	frm.findField('MOVMTEL_NO1').getStore().loadData(obj.telnocur);
                    frm.findField('RDRPTPH_NO1').getStore().loadData(obj.ptphnocur);
   	            	 if(obj.errmsg != null){Ext.Msg.alert('Failed', obj.errmsg);}   
   	             } else {
   	            	var obj = operation.error.response.responseJson
	            	 if(obj ==undefined ){ //IE11 예외처리
	            		 obj = Ext.JSON.decode(operation.error.response.responseText)
	            	 }
	            	 Ext.Msg.alert('Failed', obj.message);
   	             }
   	         }
   		});
    	  
    	 /*Ext.getCmp('tmmain').lookupReference('t212').lookupReference('list').getView().getStore().load( { 
        		params:
    					{   
        					rdr_no: record.get('RDR_NO') 
    	                 } ,
    	         scope: this,
    	         callback: function(records, operation, success) {
    	             if (success) {
    	            	 var obj = operation._response.responseJson;
    	            	 if(obj ==undefined ){ //IE11 예외처리
    	            		 obj = Ext.JSON.decode(operation._response.responseText)
    	            	 }
    	            	 if(obj.errmsg != null){Ext.Msg.alert('Failed', obj.errmsg);}   
    	             } else {
    	            	 var obj =operation.error;
    	            	 Ext.Msg.alert('Failed', obj.statusText);
    	             }
    	         }
    		});*/
    	 
    	 Ext.getCmp('tmmain').lookupReference('t117').lookupReference('list').getView().getStore().load( { 
     		params:
 					{   
     					rdr_no: record.get('RDR_NO') ,
						loginID:loginID,
						sessionkey: sessionkey
 	                 } ,
 	         scope: this,
 	         callback: function(records, operation, success) {
 	             if (success) {
 	            	 var obj = operation._response.responseJson;
 	            	 if(obj ==undefined ){ //IE11 예외처리
 	            		 obj = Ext.JSON.decode(operation._response.responseText); 
 	            	 }
 	            	 
 	            	 if(obj.errmsg != null){
 	            		 Ext.Msg.alert('Failed', obj.errmsg);
 	            	 } else{
 	            		 var frm =Ext.getCmp('tmmain').lookupReference('t117').lookupReference('detail').getForm();
  	            		frm.findField('MEDICD').getStore().loadData(obj.commcdcur1);
                         frm.findField('TEMP_STOPCLSFCD').getStore().loadData(obj.commcdcur2);
 	            	 }  
 	             } else {
 	            	 var obj = operation.error.response.responseJson
	            	 if(obj ==undefined ){ //IE11 예외처리
	            		 obj = Ext.JSON.decode(operation.error.response.responseText)
	            	 }
	            	 Ext.Msg.alert('Failed', obj.message);
 	             }
 	         }
 		});
  
    	 
     }
        
});
