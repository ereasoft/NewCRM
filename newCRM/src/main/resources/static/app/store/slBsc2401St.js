Ext.define('hkCRM.store.slBsc2401St', {
    extend: 'Ext.data.Store',
    alias: 'store.slBsc2401St',
    
    model: 'hkCRM.model.slBsc2401',
    listeners: {
        load: function ( store, records, success, eOpts )
        {  
            if ( success == false ) //접근권한이 없는 경우, false 리턴됨
            {
                var msg = eOpts.error.response.statusText;

            }
        }
    },
    proxy: {
    	actionMethods: 
    	{
            read: 'POST'
        },
        
    	paramsAsJson:true,
        type: 'ajax',
        url:'/api/bsc/getBsc2401',
        reader: 
        {
            type: 'json',
            rootProperty: 'data'
        },
        autoLoad: true,
        autoDestroy: true
    }
});
