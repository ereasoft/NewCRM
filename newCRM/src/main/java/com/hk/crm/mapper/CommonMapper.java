package com.hk.crm.mapper;
 
import java.util.*;
import org.apache.ibatis.annotations.Mapper;

@Mapper
@SuppressWarnings("rawtypes")
public interface CommonMapper {
public List<HashMap> getZip5Daum(HashMap params); 
public List<HashMap> getDkhtLog(HashMap params); 
public List<HashMap> getSendSMS(HashMap params); 
public List<HashMap> getLogin(HashMap params);
public List<HashMap> getLogincheck(HashMap params);
public List<HashMap> insertArsRec(HashMap params);
} 