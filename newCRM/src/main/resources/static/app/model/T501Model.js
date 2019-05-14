/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 이사독자
 *  기능정의 :  Model 
 *  참조테이블 : T501(이사독자)
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.model.T501Model', {
    extend: 'Ext.data.Model',

    fields: [   
    	{name: 'REGDT', type:'date', dateFormat:'Ymd'},  //등록일자
    	{name: 'REGNO', type: 'string'},  //등록번호
    	{name: 'APLCDT', type:'date', dateFormat:'Ymd'},  //신청일자
    	{name: 'MOVEDT', type:'date', dateFormat:'Ymd'},  //이사일자 
    	{name: 'PREADDR', type: 'string'},  //이사전주소
    	{name: 'ADDR', type: 'string'},  //주소
    	{name: 'DTLSADDR', type: 'string'},  //상세주소
    	{name: 'PREMOVMADDR', type: 'string'},  //이사후주소
    	{name: 'MOVMADDR', type: 'string'},  //이사지주소
    	{name: 'MOVMDTLSADDR', type: 'string'},  //이사지상세주소
    	{name: 'TRSFBOCNFMSTAT', type: 'string'},  //인계지국확인상태
    	{name: 'ACPTBOCNFMSTAT', type: 'string'},  //인수지국확인상태
    	{name: 'TRSFBONM', type: 'string'},  //인계지국명
    	{name: 'ACPTBONM', type: 'string'},  //인수지국명
    	{name: 'APLCPATHNM', type: 'string'},  //신청경로명
    	{name: 'CNS_EMPCNFMDT', type:'date', dateFormat:'Ymd'},  //처리일자 
    ]  
});
