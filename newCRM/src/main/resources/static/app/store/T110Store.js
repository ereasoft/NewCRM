/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 민원정보
 *  기능정의 :  Store 
 *  참조테이블 : T110
 *  최초작성일 : 2019.02.13
 *  최종수정일 : 2019.02.13
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.store.T110Store', {
    extend: 'Ext.data.Store',
    alias: 'store.T110Store',
    model: 'hkCRM.model.T110Model',
    proxy: {
    	actionMethods: {
            read: 'POST'
        },
    	paramsAsJson:true,
        type: 'ajax',
        url:'/api/t110/List',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: false,
	autoDestroy: true
});
