/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 중지
 *  기능정의 :  Controller
 *  참조테이블 : T112(신문구독)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */
Ext.define('hkCRM.view.t112.T112DetailController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.T112Detail',

    init: function(){
    	 
    },
    
    onChangeSupType: function(obj,newValue, oldValue, eOpts){
    	if(newValue == '1')
    	{
    		this.getView().lookupReference('t112MdList').getView().getSelectionModel().deselectAll();
    	}else{
    		this.getView().lookupReference('t112MdList').getView().getSelectionModel().selectAll();
    	}
    	
    },
    
    onSubmit: function(btn) {  
    	
    	    	var list = this.getView().up().items.items[0];
    	    	var detail = this.getView();
    			var form = this.getView().getForm();
    			var grid = this.getView().lookupReference('t112MdList').getView().getStore();
    			var record = this.getView().lookupReference('t112MdList').getView().getSelectionModel().getSelection();
    			var medicd = '';
    			var freeyn = '';
    			var freeclsf = '';
    			var qty = '';
    			
    			if(record.length > 1){
    			Ext.each(record, function (item) {
    				medicd += '##' + item.data.MEDICD;
    				freeyn += '##' + item.data.FREEYN;
    				freeclsf += '##' + item.data.FREECLSF;
    				qty += '##' + item.data.QTY;
    			});
    			}else if(record.length == 1){
    				medicd = record[0].data.MEDICD;
    				freeyn = record[0].data.FREEYN;
    				freeclsf = record[0].data.FREECLSF;
    				qty = record[0].data.QTY;
    			}
    			 
     	       if( medicd == '') {
     	    	   Ext.Msg.alert('중지처리','중지할 매체가 없습니다..');
     	    	   return false;
     	       }
    			
    			form.findField('MEDICD').setValue(medicd);
    			form.findField('FREEYN').setValue(freeyn);
    			form.findField('FREECLSF').setValue(freeclsf);
    			form.findField('QTY').setValue(qty);
    			
    			
    			
    			var msg = '등록을 하시겠습니까?'; 
    	    	Ext.Msg.confirm('중지처리',msg, function(btn){
    	    		if(btn == 'yes'){ 
    	    	        form.findField('BOCD').setValue(hkCRM.config.Config.getTmBoCd());    
    	    	        form.findField('BOSEQ').setValue(hkCRM.config.Config.getTmBoSeq());    
    	    	        form.findField('RDR_NO').setValue(hkCRM.config.Config.getTmRdrNo());  
    	    	        form.findField('SUSPDT2').setValue(form.findField('SUSPDT').getRawValue()); 
    	    	        form.findField('loginID').setValue(loginID);
    	    	    	form.findField('loginNm').setValue(loginNm);
    	    	        
    	    	        
    	    	        var params = form.getValues();
    	    	        
    	    			    	if ( form.isValid() )
    	    			        {
    	    			            var url = '/api/rdr/getRdr1034';
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
    	    			                    Ext.Msg.alert( '중지처리', '처리완료' ); 
    	    			                    list.getStore().reload();
    	    			                    grid.reload();
    	    			
    	    			                },
    	    			                failure: function ( frm, action )
    	    			                { //실패시 로직, api호출 실패시 또는 예외 오류발생시
    	    			                    var result = Ext.decode( action.response.responseText );
    	    			                    Ext.Msg.alert( '중지처리', result.errmsg );
    	    			
    	    			                }
    	    			            } );
    	    			          }
    	    		}
    	    	});
    }
    
   
	
    
});
