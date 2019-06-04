Ext.define('hkCRM.store.AdmCodeSt', {
    extend: 'Ext.data.Store',
    alias: 'store.AdmCodeSt',
    
    model: 'hkCRM.model.AdmCodeMd',

    proxy: {

        type: 'memory',
        //url:'/api/Adm/getAdm1000',
        reader: {
            type: 'json',
            rootProperty: 'jobcls'
        }
    },
    autoLoad: true,
	autoDestroy: true
});
