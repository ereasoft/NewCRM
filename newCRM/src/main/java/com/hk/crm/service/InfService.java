package com.hk.crm.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hk.crm.mapper.InfMapper;

@Service
@SuppressWarnings("rawtypes")
public class InfService {
	
	 @Autowired
	 private InfMapper infMapper;
	  

	//지국정보	
	public List<HashMap> getInf1001(HashMap params) {
		return  infMapper.getInf1001(params);
	}	
	public List<HashMap> getInf1002(HashMap params) {
		return  infMapper.getInf1002(params);
	}	
	public List<HashMap> getInf1003(HashMap params) {
		return  infMapper.getInf1003(params);
	}	
	public List<HashMap> getInf1010(HashMap params) {
		return  infMapper.getInf1010(params);
	}	
	public List<HashMap> getInf1011(HashMap params) {
		return  infMapper.getInf1011(params);
	}	
	
	//지국장 정보
	public List<HashMap> getInf1101(HashMap params) {
		return  infMapper.getInf1101(params);
	}	
	public List<HashMap> getInf1102(HashMap params) {
		return  infMapper.getInf1102(params);
	}	
	public List<HashMap> getInf1103(HashMap params) {
		return  infMapper.getInf1103(params);
	}	
	public List<HashMap> getInf1110(HashMap params) {
		return  infMapper.getInf1110(params);
	}	
	public List<HashMap> getInf1115(HashMap params) {
		return  infMapper.getInf1115(params);
	}	
	
	//관할지국조정
	public List<HashMap> getInf3201(HashMap params) {
		return  infMapper.getInf3201(params);
	}	
	public List<HashMap> getInf3202(HashMap params) {
		return  infMapper.getInf3202(params);
	}	
	public List<HashMap> getInf3203(HashMap params) {
		return  infMapper.getInf3203(params);
	}	
	public List<HashMap> getInf3210(HashMap params) {
		return  infMapper.getInf3210(params);
	}	
	
	
	
	
}
