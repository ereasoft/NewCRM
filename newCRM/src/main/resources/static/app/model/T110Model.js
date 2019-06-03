/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 민원정보
 *  기능정의 :  Model 
 *  참조테이블 : T110
 *  최초작성일 : 2019.02.13
 *  최종수정일 : 2019.02.13
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.model.T110Model', {
    extend: 'Ext.data.Model',

    fields: [  
    	{name: 'BOCD', type: 'string'},  //지국코드
    	{name: 'REGDT', type:'date', dateFormat:'Ymd'},  //등록일
    	{name: 'ACPNDT', type:'date', dateFormat:'c'},  //접수일자
    	{name: 'REGNO', type: 'string'},  //등록번호
    	{name: 'DSCTTYPENM', type: 'string'},  //불만유형코드명
    	{name: 'ACPNPATHNM', type: 'string'},  //접수경로코드명
    	{name: 'MEDICD', type: 'string'},  //매체코드
    	{name: 'RDRNM', type: 'string'},  //독자명
    	{name: 'TITL', type: 'string'},  //제목
    	{name: 'CONT', type: 'string'},  //내용
    	{name: 'BOPROCDT', type:'date', dateFormat:'c'},  //지국처리일자
    	{name: 'BOPROCYN', type: 'string'},  //지국처리여부
    	{name: 'PROCCONT', type: 'string'},  //처리내용 
    	{name: 'CNS_EMPCNFMDT', type:'date', dateFormat:'c'},  //상담원확인일자
    	{name: 'CNS_EMPCNFMYN', type: 'string'},  //상담원확인여부
    	{name: 'CNS_EMPCNFMFLNM', type: 'string'} , //상담원확인성명
    	{name: 'CNS_EMPACPNFLNM', type: 'string'}  //상담원접수성명
    ]  
});
