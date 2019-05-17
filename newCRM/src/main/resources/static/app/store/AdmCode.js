Ext.define('hkCRM.store.AdmCodeSt', {
    extend: 'Ext.data.Store',
    alias: 'store.AdmCode',
    fields: [
    	'JOB_CLSF',  //업무구분
    	'CDCLSF',    //코드구분
        'CDVAL',	//코드
        'CDNM'
    ],
    storeId: 'AdmCodeSt',
    proxy: { type: 'memory', reader: { type: 'json'} }
});