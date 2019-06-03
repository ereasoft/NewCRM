package com.hk.crm.service;
 
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hk.crm.mapper.CommonMapper;

@Service
@SuppressWarnings("rawtypes")
public class CommonService {
	
	 @Autowired
	 private CommonMapper commonMapper;
	 
	public List<HashMap> getZip5Daum(HashMap params) {
		return  commonMapper.getZip5Daum(params);
	}	
	public List<HashMap> getDkhtLog(HashMap params) {
		return  commonMapper.getDkhtLog(params);
	}	
	public List<HashMap> getSendSMS(HashMap params) {
		return  commonMapper.getSendSMS(params);
	}	
	public List<HashMap> getLogin(HashMap params) {
		return  commonMapper.getLogin(params);
	}	
	public List<HashMap> getLogincheck(HashMap params) {
		return  commonMapper.getLogincheck(params);
	}	
	public List<HashMap> insertArsRec(HashMap params) {
		return  commonMapper.insertArsRec(params);
	}	
}
