/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 휴독정보
 *  기능정의 :  Store 
 *  참조테이블 : T117(휴독정보)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.store.T117Store', {
    extend: 'Ext.data.Store',
    alias: 'store.T117Store',
    model: 'hkCRM.model.T117Model',
    proxy: {
    	actionMethods: {
            read: 'POST'
        },
    	paramsAsJson:true,
        type: 'ajax',
        url:'/api/rdr/getRdr1081',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: false,
	autoDestroy: true
});
