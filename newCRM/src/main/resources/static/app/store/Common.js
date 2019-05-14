Ext.define('hkCRM.store.Common', {
    extend: 'Ext.data.Store',
    alias: 'store.Common',
    fields: [
        'CDVAL',
        'CDNM',
        'CDABRVNM',  //코드약어
        'MANGITEM1'  //기준값1
    ],
    storeId: 'Common',
    proxy: { type: 'memory', reader: { type: 'json'} }
});