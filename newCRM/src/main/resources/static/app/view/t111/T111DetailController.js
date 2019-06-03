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
    },
    
    onSubmit: function(btn) {   
    	    	var list = this.getView().up().items.items[0];
    	    	var detail = this.getView();
    			var form = this.getView().getForm();
    			var msg = '등록을 하시겠습니까?'; 
    			if(btn.getText() == '수정'){
    				form.findField('ACCFLAG').setValue('U');
    				msg = '수정을 하시겠습니까?';
    			}
    	    	Ext.Msg.confirm('구독추가',msg, function(btn){
    	    		if(btn == 'yes'){ 
    	    	        form.findField('BOCD').setValue(hkCRM.config.Config.getTmBoCd());    
    	    	        form.findField('BOSEQ').setValue(hkCRM.config.Config.getTmBoSeq());    
    	    	        form.findField('RDR_NO').setValue(hkCRM.config.Config.getTmRdrNo());    
    	    	        form.findField('loginID').setValue(loginID);
    	    	    	form.findField('loginNm').setValue(loginNm);
    	    	    	form.findField('EXTNDT2').setValue(form.findField('EXTNDT').getRawValue());
      	    	        form.findField('SUBSFRDT2').setValue(form.findField('SUBSFRDT').getRawValue());
    	    	        var params = form.getValues();
    	    	        
    	    			    	if ( form.isValid() )
    	    			        {
    	    			            var url = '/api/rdr/getRdr1013';
    	    			            form.setConfig( {
    	    			                'url': url,
    	    			                'jsonSubmit': true
    	    			            } );
    	    			            jsonSubmit: true
    	    			            form.submit( {
    	    			                waitMsg: 'Processing...',
    	    			                method: 'POST',
    	    			                //headers: { 'Content-Type': 'multipart/form-data; charset=UTF-8' },
    	    			                params: params,
    	    			                submitEmptyText: false,
    	    			
    	    			                success: function ( frm, action )
    	    			                { //처리성공시 로직 추가, 정상적으로 리터된 경우 모두 포함 
    	    			                    var result = Ext.decode( action.response.responseText );
    	    			                    //frm.findField( 'quota_no' ).setValue( result.data.quota_no ); 
    	    			                    Ext.Msg.alert( '구독추가', '처리완료' );
    	    			                    //detail.lookupReference('regBtn').setText('등록'); 
    	    			            		//frm.findField('ACCFLAG').setValue('I');   
    	    			                    list.getStore().reload();
    	    			
    	    			
    	    			                },
    	    			                failure: function ( frm, action )
    	    			                { //실패시 로직, api호출 실패시 또는 예외 오류발생시
    	    			                    var result = Ext.decode( action.response.responseText );
    	    			                    Ext.Msg.alert( '구독추가', result.errmsg );
    	    			
    	    			                }
    	    			            } );
    	    			          }
    	    		}
    	    	});
    },
    
    onReset: function(){
		var frm = this.getView().getForm(); 
		this.getView().lookupReference('regBtn').setText('등록');  
		frm.reset();
		frm.findField('ACCFLAG').setValue('I');    
		frm.findField('EXTNTYPECD').setValue('30');    
		frm.findField('EXTNDT').setValue(Ext.Date.format(new Date(),'Ymd'));
	} ,
    
	
    
});
