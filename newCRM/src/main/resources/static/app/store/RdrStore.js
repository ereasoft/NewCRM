Ext.define('hkCRM.store.RdrStore', {
    extend: 'Ext.data.Store',
    alias: 'store.RdrStore',
    model: 'hkCRM.model.RdrModel',
    proxy: {
    	actionMethods: {
            read: 'POST'
        },
    	paramsAsJson:true,
        type: 'ajax',
        url:'/api/rdr/rdrList',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: false,
	autoDestroy: true
});
