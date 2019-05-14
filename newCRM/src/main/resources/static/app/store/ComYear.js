Ext.define('hkCRM.store.ComYear', {
    extend: 'Ext.data.Store',

    alias: 'store.ComYear',
    storeId: 'ComYear',
    model: 'hkCRM.model.ComCode',  
    proxy: { type: 'memory', reader: { type: 'json'} },
	listeners: {
            load: function(store) {   
            	var year = (new Date()).getFullYear();
            	var initYear = 2006;
            	var cnt = year - initYear;
				for(var i=0;i<=cnt;i++){
					store.insert(i,{code:year-i,codenm:year-i});
				}
            }
    },
	autoLoad: true,
	autoDestroy: true
});
