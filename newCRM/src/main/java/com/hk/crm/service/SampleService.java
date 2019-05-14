package com.hk.crm.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hk.crm.mapper.SampleMapper;

@Service
public class SampleService {
	
	 @Autowired
	 private SampleMapper sampleMapper;
	 
	@SuppressWarnings("rawtypes")
	public List<HashMap> getSampleList(HashMap params) {
		return  sampleMapper.getSampleList(params);
	}
}
