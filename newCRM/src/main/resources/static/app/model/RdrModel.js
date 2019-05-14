/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 독자정보
 *  기능정의 :  Model 
 *  참조테이블 : T107,  T107N
 *  최초작성일 : 2019.01.30
 *  최종수정일 : 2019.01.30
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.model.RdrModel', {
    extend: 'Ext.data.Model',

    fields: [  
    	{name: 'BONM', type: 'string'},  //지국명
    	{name: 'BOCD', type: 'string'},  //지국코드
    	{name: 'DLVDSTCCD_NO_INTVNO', type: 'string'},  //구역-배달번호
    	{name: 'DLVDSTCCD', type: 'string'},  //구역코드
    	{name: 'DLVNO', type: 'string'},  //배달번호
    	{name: 'DLVINTVNO', type: 'string'},  //사이번호
    	{name: 'RDR_NO', type: 'string'},  //독자번호
    	{name: 'RDRNM', type: 'string'},  //독자명
    	{name: 'RDRTEL_NO', type: 'string'},  //전화
    	{name: 'RDRTEL_NO1', type: 'string'},  //전화1
    	{name: 'RDRTEL_NO2', type: 'string'},  //전화2
    	{name: 'RDRTEL_NO3', type: 'string'},  //전화3
    	{name: 'RDRPTPH_NO', type: 'string'},  //휴대폰
    	{name: 'RDRPTPH_NO1', type: 'string'},  //휴대폰1
    	{name: 'RDRPTPH_NO2', type: 'string'},  //휴대폰2
    	{name: 'RDRPTPH_NO3', type: 'string'},  //휴대폰3
    	{name: 'DLVADDR', type: 'string'},  //주소
    	{name: 'DLVDTLSADDR', type: 'string'},  //상세주소
    	{name: 'ADDRNM', type: 'string'},  //주소코드명
    	{name: 'DLVZONECODE', type: 'string'},  //신우편번호 
    	{name: 'DLVDONG', type: 'string'},  //동
    	{name: 'DLVSER_NO', type: 'string'},  //호수
    	{name: 'DLVBNJI', type: 'string'},  //번지
    	{name: 'TOTSUBSAMT', type: 'string'},  //총구독액
    	{name: 'SUSPYN', type: 'string'},  //중지독자여부
    	{name: 'RDRCLSF', type: 'string'}, //독자구분	
    	{name: 'RPTVMEDICD', type: 'string'}, //대표매체코드	
    	{name: 'COUEXTNPERSID', type: 'string'}, //다부수처코드	
    	{name: 'ENDCNT', type: 'int'} //구독종료 일자 카운트
       // {name: 'DLVDSTCCD', type: 'date', dateFormat:'Y-m-d'}, //접수일 
    ]  
});
