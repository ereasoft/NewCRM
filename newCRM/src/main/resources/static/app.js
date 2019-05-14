/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'hkCRM.Application',

    name: 'hkCRM',

    requires: [
        // This will automatically load all classes in the hkCRM namespace
        // so that application classes do not need to require each other.
        'hkCRM.*' ,
    	'hkCRM.config.*',  
    	'Ext.plugin.*',
        'Ext.layout.*',  
        'Ext.tab.Panel',
        'Ext.form.*'
    ],

    // The name of the initial view to create.
    //mainView: 'hkCRM.view.main.Main'
});
