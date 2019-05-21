Ext.define('hkCRM.store.AdmCode1001St', {
    extend: 'Ext.data.Store',
    alias: 'store.AdmCode1001St',
    
    model: 'hkCRM.model.AdmCode1001Md',
    listeners: {
        load: function ( store, records, success, eOpts )
        {  
            if ( success == false ) //접근권한이 없는 경우, false 리턴됨
            {
                var msg = eOpts.error.response.statusText;
                //var msg = Ext.decode(eOpts.error.response.responseText).msg; //오류일 경우, 리턴메세지 읽기
                // ReqOrder.config.Util.authDeny( msg ); //접근권한 오류 일 경우, 처리 펑션
            }
        }
    },
    proxy: {
    	actionMethods: {
            read: 'POST'
        },
    	paramsAsJson:true,
        type: 'ajax',
        url:'/api/Adm/getAdm1001',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
	autoDestroy: true
});
