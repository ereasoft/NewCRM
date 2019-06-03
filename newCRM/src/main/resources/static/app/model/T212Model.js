/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 자동이체신청
 *  기능정의 :  Model 
 *  참조테이블 : T212(지동이체신청), T111(신문구독) 
 *  최초작성일 : 2019.02.15
 *  최종수정일 : 2019.02.15
 *  개발사명 : 이레소프트 
 *  개발자명 : 임근기 (geungi@ereasoft.com)
 */

Ext.define('hkCRM.model.T212Model', {
    extend: 'Ext.data.Model',

    fields: [   
    	{name: 'RDR_NO', type: 'string'},  //독자번호
    	{name: 'MEDICD', type: 'string'},  //매체코드
    	{name: 'MEDINM', type: 'string'},  //매체명
    	{name: 'VALQTY', type: 'int'},  //유가부수
    	{name: 'NO_VALQTY', type: 'int'},  //준유가부수
    	{name: 'PRE_VALQTY', type: 'int'},  //무료부수
    	{name: 'REALSUBSAMT', type: 'int'},  //실구독금액 
    	{name: 'CLAMTMTHDCD', type: 'string'},  //수금방법코드
    	{name: 'CLAMTMTHDNM', type: 'string'},  //수금방법 
    	{name: 'APLCPROCSTAT', type: 'string'},  //처리상태 
    ]  
});
