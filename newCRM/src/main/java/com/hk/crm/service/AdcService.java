package com.hk.crm.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hk.crm.mapper.AdcMapper;

@Service
@SuppressWarnings("rawtypes")
public class AdcService {
	
	@Autowired
	 private AdcMapper adcMapper;
	
	public List<HashMap> getAdc1003(HashMap params) {
		return  adcMapper.getAdc1003(params);
	}	
	
}
