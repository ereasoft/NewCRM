package com.hk.crm.mapper;

import java.util.*;
import org.apache.ibatis.annotations.Mapper;

@Mapper
@SuppressWarnings("rawtypes")
public interface AdcMapper {
	public List<HashMap> getAdc1003(HashMap params);
}
