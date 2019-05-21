Ext.define('hkCRM.store.AdmCodeSt', {
    extend: 'Ext.data.Store',
    alias: 'store.AdmCodeSt',
    
    model: 'hkCRM.model.AdmCodeMd',  
    proxy: {
    	actionMethods: {
            read: 'POST'
        },
    	paramsAsJson:true,
        type: 'ajax',
        url:'/api/Adm/getAdm1000',
        reader: {
            type: 'json',
            rootProperty: 'jobclsflist'
        }
    },
    autoLoad: false,
	autoDestroy: true
});
