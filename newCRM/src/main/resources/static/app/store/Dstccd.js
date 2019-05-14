Ext.define('hkCRM.store.Dstccd', {
    extend: 'Ext.data.Store',
    alias: 'store.Dstccd',
    fields: [
        'DSTCCD',
        'DSTCNM',
        'TEAMCD'
    ],
    storeId: 'Dstccd',
    proxy: { type: 'memory', reader: { type: 'json'} }
});