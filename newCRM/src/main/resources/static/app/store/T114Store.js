/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 수금정보
 *  기능정의 :  Store 
 *  참조테이블 : T111(신문구독), T114(신문구독수금), T914(전사공통코드)
 *  최초작성일 : 2019.02.13
 *  최종수정일 : 2019.02.13
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.store.T114Store', {
    extend: 'Ext.data.Store',
    alias: 'store.T114Store',
    storeId: 'T114Store',
    
    model: 'hkCRM.model.T114Model',
    proxy: {
    	actionMethods: {
            read: 'POST'
        },
    	paramsAsJson:true,
        type: 'ajax',
        url:'/api/rdr/getRdr1021',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: false,
	autoDestroy: true
});
