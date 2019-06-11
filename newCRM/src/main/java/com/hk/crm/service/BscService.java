package com.hk.crm.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hk.crm.mapper.BscMapper;

@Service
@SuppressWarnings("rawtypes")
public class BscService {
	
	 @Autowired
	 private BscMapper bscMapper;
	  
	//안내문관리 - 조회 
	public List<HashMap> getBsc2401(HashMap params) {
		return  bscMapper.getBsc2401(params);
	}	

	//안내문관리 - 조회 
	public List<HashMap> getBsc2410(HashMap params) {
		return  bscMapper.getBsc2410(params);
	}	
	
}
