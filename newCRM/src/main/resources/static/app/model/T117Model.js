/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 휴독정보
 *  기능정의 :  Model 
 *  참조테이블 : T117(휴독정보)
 *  최초작성일 : 2019.02.13
 *  최종수정일 : 2019.02.13
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.model.T117Model', {
    extend: 'Ext.data.Model',

    fields: [    
    	{name: 'REGDT', type:'date', dateFormat:'Ymd'},  //등록일자
    	{name: 'REGNO', type: 'string'},  //등록번호
    	{name: 'RDR_NO', type: 'string'},  //독자번호
    	{name: 'MEDICD', type: 'string'},  //매체코드
    	{name: 'MEDINM', type: 'string'},  //매체명
    	{name: 'APLCDT', type:'date', dateFormat:'Ymd'},  //신청일자
    	{name: 'APLCPATHNM', type: 'string'},  //신청경로명
    	{name: 'STOPCLSFNM', type: 'string'},  //휴독구분명
    	{name: 'DLVDT', type:'date', dateFormat:'Ymd'},  //배달일자
    	{name: 'SUSPFRDT', type:'date', dateFormat:'Ymd'},  //휴독시작일자
    	{name: 'SUSPTODT', type:'date', dateFormat:'Ymd'},  //휴독종료일자
    	{name: 'BOCNFMYN', type: 'string'},  //지국확인여부
    	{name: 'BOCNFMDT', type:'date', dateFormat:'Ymd'},  //지국확인일자 
    	{name: 'BOCNFMSTATNM', type: 'string'},  //지국확인상태 
    ]  
});
