/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 수금정보
 *  기능정의 :  Controller
 *  참조테이블 : T111(신문구독), T114(신문구독수금), T914(전사공통코드)
 *  최초작성일 : 2019.02.13
 *  최종수정일 : 2019.02.13
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.t114.T114DetailController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.T114Detail',

    init: function(){
    	 //this.lookupReference('brfyear').getStore().load();
    	//this.lookupReference('kkkkk').setStore('test');
    },
    
    onSubmit: function()
    {  
    	var list = this.getView().up().items.items[0];
		var form = this.getView().getForm();
    	Ext.Msg.confirm('수금처리','수금처리를 하시겠습니까?', function(btn){
    		if(btn == 'yes'){
    			form.findField('RDR_NO').setValue(hkCRM.config.Config.getTmRdrNo());
    	        form.findField('BOCD').setValue(hkCRM.config.Config.getTmBoCd()); 
    	        form.findField('BOSEQ').setValue(hkCRM.config.Config.getTmBoSeq());
    	        form.findField('MEDICD').setValue(hkCRM.config.Config.getTmMediaCd()); 
    	        form.findField('RECPDT2').setValue(form.findField('RECPDT').getRawValue());
    	        form.findField('loginID').setValue(loginID);
    	    	form.findField('loginNm').setValue(loginNm);
    	        var params = form.getValues();
    	        
    			    	if ( form.isValid() )
    			        {
    			            var url = '/api/rdr/getRdr1023';
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
    			                    Ext.Msg.alert( '수금내역', '처리완료' );
    			                    frm.reset();
    			                    list.getStore().reload();
    			
    			
    			                },
    			                failure: function ( frm, action )
    			                { //실패시 로직, api호출 실패시 또는 예외 오류발생시
    			                    var result = Ext.decode( action.response.responseText );
    			                    Ext.Msg.alert( '민원정보', result.errmsg );
    			
    			                }
    			            } );
    			          }
    		}
    	});
    	
    	
		
    }
    
});
