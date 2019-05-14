/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 수금정보
 *  기능정의 :  Model 
 *  참조테이블 : T111(신문구독), T114(신문구독수금), T914(전사공통코드)
 *  최초작성일 : 2019.02.13
 *  최종수정일 : 2019.02.13
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.model.T114Model', {
    extend: 'Ext.data.Model',

    fields: [   
    	{name: 'SUBSMAPPLI', type: 'string'},  //구독월분
    	{name: 'RECPDT', type:'date', dateFormat:'Ymd'},  //수금일자
    	{name: 'CLAMAMT', type: 'int'},  //청구금액
    	{name: 'CLAMT', type: 'int'},  //입금액
    	{name: 'RCPMCLSFCD', type: 'string'},  //수금구분(입금구분)
    	{name: 'CLAMTMTHDCD', type: 'string'},  //수금방법
    	{name: 'RCPMCLSFNM', type: 'string'}  //수금구분(수금이나 선불은 수금방법표시, 그외엔 수금구분 표시)
    ]  
});
