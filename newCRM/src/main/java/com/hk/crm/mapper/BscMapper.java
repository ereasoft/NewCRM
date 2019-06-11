package com.hk.crm.mapper;
 
import java.util.*;
import org.apache.ibatis.annotations.Mapper;

@Mapper
@SuppressWarnings("rawtypes")
public interface BscMapper {

// 안내문관리  
public List<HashMap> getBsc2401(HashMap params);  // 안내문관리
public List<HashMap> getBsc2410(HashMap params);  // 안내문관리



}
