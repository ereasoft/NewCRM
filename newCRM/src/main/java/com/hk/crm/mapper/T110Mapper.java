package com.hk.crm.mapper;
 
import java.util.*;
import org.apache.ibatis.annotations.Mapper;

@Mapper
@SuppressWarnings("rawtypes")
public interface T110Mapper {
public List<HashMap> getT110List(HashMap params);
public List<HashMap> getRdr1052(HashMap params);
public List<HashMap> getCoAT110(HashMap params);
}
