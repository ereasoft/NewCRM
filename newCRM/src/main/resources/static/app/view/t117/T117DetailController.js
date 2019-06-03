/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 휴독
 *  기능정의 :  Controller
 *  참조테이블 : T117(휴독)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.t117.T117DetailController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.T117Detail',

    init: function(){
    	 
    },
    
    onSubmit: function(btn) {  
    	var medicd = hkCRM.config.Config.getTmSelMediaCd()
    	       if( medicd == '') {
    	    	   Ext.Msg.alert('휴독처리','중지 또는 구독매체기 없습니다. ');
    	    	   return false;
    	       }
    	    	var list = this.getView().up().items.items[0];
    	    	var detail = this.getView();
    			var form = this.getView().getForm();
    			var msg = '등록을 하시겠습니까?';
    			if(btn.getText() == '삭제'){
    				 form.findField('ACCFLAG').setValue('D');
    				 msg = '삭제를 하시겠습니까?';
    			}else if(btn.getText() == '수정'){
    				form.findField('ACCFLAG').setValue('U');
    				msg = '수정을 하시겠습니까?';
    			}
    	    	Ext.Msg.confirm('휴독처리',msg, function(btn){
    	    		if(btn == 'yes'){ 
    	    	        form.findField('BOCD').setValue(hkCRM.config.Config.getTmBoCd());    
    	    	        form.findField('BOSEQ').setValue(hkCRM.config.Config.getTmBoSeq());    
    	    	        form.findField('RDR_NO').setValue(hkCRM.config.Config.getTmRdrNo());  
    	    	        form.findField('RDRNM').setValue(hkCRM.config.Config.getTmRdrNm());  
    	    	        form.findField('DLVDT2').setValue(form.findField('DLVDT').getRawValue());
    	    	        form.findField('SUSPTODT2').setValue(form.findField('SUSPTODT').getRawValue());
    	    	        form.findField('SUSPFRDT2').setValue(form.findField('SUSPFRDT').getRawValue());
    	    	        form.findField('loginID').setValue(loginID);
    	    	    	form.findField('loginNm').setValue(loginNm);
    	    	        var params = form.getValues();
    	    	        
    	    			    	if ( form.isValid() )
    	    			        {
    	    			            var url = '/api/rdr/getRdr1083';
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
    	    			                    Ext.Msg.alert( '휴독처리', '처리완료' );
    	    			                    detail.lookupReference('regBtn').setText('등록');
    	    			                    detail.lookupReference('delBtn').setHidden(true) ;
    	    			                    if(frm.findField('ACCFLAG').getValue() == 'D')  frm.reset();
    	    			            		frm.findField('ACCFLAG').setValue('I');   
    	    			                    list.getStore().reload();
    	    			
    	    			
    	    			                },
    	    			                failure: function ( frm, action )
    	    			                { //실패시 로직, api호출 실패시 또는 예외 오류발생시
    	    			                    var result = Ext.decode( action.response.responseText );
    	    			                    Ext.Msg.alert( '휴독처리', result.errmsg );
    	    			
    	    			                }
    	    			            } );
    	    			          }
    	    		}
    	    	});
    },
    
    onReset: function(){
		var frm = this.getView().getForm(); 
		this.getView().lookupReference('regBtn').setText('등록');
		this.getView().lookupReference('delBtn').setHidden(true) ;
		frm.reset();
		frm.findField('ACCFLAG').setValue('I');   
	} ,
	
	onMediaChg: function( me, record, eOpts ){
		var frm = this.getView().getForm(); 
		frm.findField('QTY').setValue(record.get('MANGITEM1'));
	}
    
});
