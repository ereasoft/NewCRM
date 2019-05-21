/**
 *  프로젝트명 : 한국경제 CRM 고도화
 *  화면정의 : 공통코드
 *  기능정의 :  Model 
 *  참조테이블 : AdmCode
 *  최초작성일 : 2019.05.20
 *  최종수정일 : 2019.05.20
 *  개발사명 : 이레소프트 
 *  개발자명 : 이상윤
 */

Ext.define('hkCRM.model.AdmCodeMd', {
    extend: 'Ext.data.Model',

    fields: 
    [    
    	{name: 'JOB_CLSF', type: 'string'},  //업무구분
    	{name: 'CDCLSF', type: 'string'},  //코드구분
    	{name: 'CDVAL', type: 'string'},  //코드
    	{name: 'CDNM', type: 'string'}  //코드명
    ]  
});
