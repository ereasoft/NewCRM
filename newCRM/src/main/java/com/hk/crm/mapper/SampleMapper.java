package com.hk.crm.mapper;

import java.util.*;
import org.apache.ibatis.annotations.Mapper;

@Mapper
@SuppressWarnings("rawtypes")
public interface SampleMapper {
public List<HashMap> getSampleList(HashMap params);
}
