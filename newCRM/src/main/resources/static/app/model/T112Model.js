/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 구독정보
 *  기능정의 :  Model 
 *  참조테이블 : T112(신문구독계약)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.model.T112Model', {
    extend: 'Ext.data.Model',

    fields: [   
    	{name: 'CNTRNO', type: 'string'},  //계약순번
    	{name: 'MANGNO', type: 'string'},  //관리번호 
    	{name: 'MEDICD', type: 'string'},  //매체코드
    	{name: 'MEDINM', type: 'string'},  //매체명
    	{name: 'EXTNDT', type:'date', dateFormat:'Ymd'},  //확장일자
    	{name: 'EXTNTYPENM', type: 'string'},  //확장유형명
    	{name: 'EXTNPERSNM', type: 'string'},  //확장자명
    	{name: 'VALMM', type: 'string'},  //유가월
    	{name: 'SUBSFRDT', type:'date', dateFormat:'Ymd'},  //구독시작일자
    	{name: 'SUBSQTY', type: 'int'},  //구독부수
    	{name: 'SUBSUPRC', type: 'int'},  //구독단가
    	{name: 'DSCNAMT', type: 'int'},  //할인금액
    	{name: 'FREEYN', type: 'int'},  //무료여부
    	{name: 'EXTNCOST', type: 'int'},  //확장비용
    	{name: 'BNS_ITEMNM', type: 'string'}  //판촉물명
    	
    ]  
});
