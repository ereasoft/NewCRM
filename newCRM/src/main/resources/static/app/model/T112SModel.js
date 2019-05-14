/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 구독중지
 *  기능정의 :  Model 
 *  참조테이블 : T112(신문구독계약)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.model.T112SModel', {
    extend: 'Ext.data.Model',

    fields: [   
    	{name: 'CNTRNO', type: 'string'},  //계약순번
    	{name: 'MANGNO', type: 'string'},  //관리번호
    	{name: 'RDR_NO', type: 'string'},  //독자번호
    	{name: 'MEDICD', type: 'string'},  //매체코드
    	{name: 'MEDINM', type: 'string'},  //매체명
    	{name: 'SUSPDT', type:'date', dateFormat:'Ymd'},  //중지일자
    	{name: 'SUSPRESN', type: 'string'},  //중지사유
    	{name: 'EXTNDT', type:'date', dateFormat:'Ymd'},  //확장일자 
    	{name: 'EXTNPERSNM', type: 'string'},  //확장자명
    	{name: 'VALMM', type: 'string'},  //유가월 
    	{name: 'SUBSQTY', type: 'int'},  //구독부수
    	{name: 'QTY', type: 'int'},  //총구독부수
    	{name: 'FREEYN', type: 'string'},  //무료여부 
    	{name: 'FREEYNNM', type: 'string'},  //무료여부명
    	{name: 'DSCNAMT', type: 'int'},  //할인금액
    	{name: 'FREECLSF', type: 'string'},  //무료구분명
    	{name: 'FREECLSFNM', type: 'string'},  //무료구분명 
    	{name: 'CANCPOSBYN', type: 'string'}  //취소가능여부 ('Y' : 취소가능, 'N' : 취소불가)
    	
    ]  
});
