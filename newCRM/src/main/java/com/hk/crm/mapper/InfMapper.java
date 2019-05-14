package com.hk.crm.mapper;
 
import java.util.*;
import org.apache.ibatis.annotations.Mapper;

@Mapper
@SuppressWarnings("rawtypes")
public interface InfMapper {

//지국정보
public List<HashMap> getInf1001(HashMap params);
public List<HashMap> getInf1002(HashMap params);
public List<HashMap> getInf1003(HashMap params);
public List<HashMap> getInf1010(HashMap params);
public List<HashMap> getInf1011(HashMap params);

//지국장 정보
public List<HashMap> getInf1101(HashMap params);
public List<HashMap> getInf1102(HashMap params);
public List<HashMap> getInf1103(HashMap params);
public List<HashMap> getInf1110(HashMap params);
public List<HashMap> getInf1115(HashMap params);

//관할지국조정
public List<HashMap> getInf3201(HashMap params);
public List<HashMap> getInf3202(HashMap params);
public List<HashMap> getInf3203(HashMap params);
public List<HashMap> getInf3210(HashMap params);




}
