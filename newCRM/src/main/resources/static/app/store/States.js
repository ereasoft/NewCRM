Ext.define('hkCRM.store.States', {
    extend: 'Ext.data.Store',
    alias: 'store.states',

    fields: [
        'abbr',
        'state',
        'description',
        'country'
    ],
    storeId: 'states',

    data: [
        {abbr:0, state:'AL',description: 'Alabama', country:'The Heart of Dixie'}
    ]
});