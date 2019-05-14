package com.hk.crm.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hk.crm.mapper.T110Mapper;

@Service
@SuppressWarnings("rawtypes")
public class T110Service {
	
	 @Autowired
	 private T110Mapper mapper; 
	
	public List<HashMap> getT110List(HashMap params) {
		return  mapper.getT110List(params);
	}
	
	public List<HashMap> getRdr1052(HashMap params) {
		return  mapper.getRdr1052(params);
	}
	
	public List<HashMap> getCoAT110(HashMap params) {
		return  mapper.getCoAT110(params);
	}
}
