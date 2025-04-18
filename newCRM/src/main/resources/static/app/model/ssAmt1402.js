/*
 * File: app/model/ssAmt1402.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.6.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.6.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('hkCRM.model.ssAmt1402', {
    extend: 'Ext.data.Model',
    alias: 'model.ssamt1402',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Date'
    ],

    fields: [
        {
            type: 'int',
            name: 'id'
        },
        {
            type: 'string',
            name: '구역+배달'
        },
        {
            type: 'string',
            name: '독자번호'
        },
        {
            type: 'string',
            name: '독자명'
        },
        {
            type: 'string',
            name: '지국명'
        },
        {
            type: 'string',
            name: '매체'
        },
        {
            type: 'date',
            name: '신청일자'
        },
        {
            type: 'string',
            name: '신청구분'
        },
        {
            type: 'string',
            name: '일련번호'
        },
        {
            type: 'string',
            name: '납부자번호'
        }
    ]
});