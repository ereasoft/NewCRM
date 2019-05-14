package com.hk.crm.mapper;
 
import java.util.*;
import org.apache.ibatis.annotations.Mapper;

@Mapper
@SuppressWarnings("rawtypes")
public interface AdmMapper {

//시스템관리 - 공통코드 
public List<HashMap> getAdm1000(HashMap params);
public List<HashMap> getAdm1001(HashMap params);
public List<HashMap> getAdm1002(HashMap params);
public List<HashMap> getAdm1010(HashMap params);

//시스템관리 - 계정코드 
public List<HashMap> getAdm1201(HashMap params);
public List<HashMap> getAdm1202(HashMap params);
public List<HashMap> getAdm1203(HashMap params);
public List<HashMap> getAdm1210(HashMap params);

//시스템관리 - 우편번호 - 지번주소
public List<HashMap> getAdm1301(HashMap params);
public List<HashMap> getAdm1302(HashMap params);
public List<HashMap> getAdm1310(HashMap params);
public List<HashMap> getAdm1320(HashMap params);

//시스템관리 - 우편번호 - 도로명주소
public List<HashMap> getAdm2601(HashMap params);
public List<HashMap> getAdm2602(HashMap params);
public List<HashMap> getAdm2610(HashMap params);

//시스템관리 - 권한관리 - 메뉴 
public List<HashMap> getAdm1801(HashMap params);
public List<HashMap> getAdm1802(HashMap params);
public List<HashMap> getAdm1803(HashMap params);
public List<HashMap> getAdm1810(HashMap params);

//시스템관리 - 권한관리 - 업무그룹 
public List<HashMap> getAdm1901(HashMap params);
public List<HashMap> getAdm1902(HashMap params);
public List<HashMap> getAdm1904(HashMap params);
public List<HashMap> getAdm1910(HashMap params);
public List<HashMap> getAdm1911(HashMap params);

//시스템관리 - 권한관리 - 사용자 
public List<HashMap> getAdm2000(HashMap params);
public List<HashMap> getAdm2001(HashMap params);
public List<HashMap> getAdm2002(HashMap params);
public List<HashMap> getAdm2010(HashMap params);

//시스템관리 - 지국마감
public List<HashMap> getAdm2101(HashMap params);
public List<HashMap> getAdm2110(HashMap params);
public List<HashMap> getAdm2120(HashMap params);

//시스템관리 - 구역코드
public List<HashMap> getBsc1401(HashMap params);
public List<HashMap> getBsc1402(HashMap params);
public List<HashMap> getBsc1410(HashMap params);




}
