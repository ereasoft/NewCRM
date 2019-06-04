Ext.define('hkCRM.store.AdmCodeSt', {
    extend: 'Ext.data.Store',
    alias: 'store.AdmCodeSt',
    
<<<<<<< HEAD
    model: 'hkCRM.model.AdmCodeMd',  
=======
    model: 'hkCRM.model.AdmCodeMd',

>>>>>>> branch 'master' of https://github.com/ereasoft/NewCRM.git
    proxy: {

        type: 'memory',
        //url:'/api/Adm/getAdm1000',
        reader: {
            type: 'json',
<<<<<<< HEAD
            rootProperty: 'jobclsflist'
=======
            rootProperty: 'jobcls'
>>>>>>> branch 'master' of https://github.com/ereasoft/NewCRM.git
        }
    },
<<<<<<< HEAD
    autoLoad: false,
	autoDestroy: true
=======
    //autoLoad: true,
	//autoDestroy: true
>>>>>>> branch 'master' of https://github.com/ereasoft/NewCRM.git
});
