package com.hk.crm.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hk.crm.mapper.RdrMapper;

@Service
@SuppressWarnings("rawtypes")
public class RdrService {
	
	 @Autowired
	 private RdrMapper rdrMapper;
	 
	public List<HashMap> getRdrList(HashMap params) {
		return  rdrMapper.getRdrList(params);
	}	 
	public List<HashMap> getRdr1003(HashMap params) {
		return  rdrMapper.getRdr1003(params);
	}	
	public List<HashMap> getRdr1004(HashMap params) {
		return  rdrMapper.getRdr1004(params);
	}	
	public List<HashMap> getRdr1002(HashMap params) {
		return  rdrMapper.getRdr1002(params);
	}	
	public List<HashMap> getRdr1022(HashMap params) {
		return  rdrMapper.getRdr1022(params);
	}	
	public List<HashMap> getRdr1023(HashMap params) {
		return  rdrMapper.getRdr1023(params);
	}	
	public List<HashMap> getRdr1021(HashMap params) {
		return  rdrMapper.getRdr1021(params);
	}
	public List<HashMap> getRdr1011(HashMap params) {
		return  rdrMapper.getRdr1011(params);
	}
	public List<HashMap> getRdr1012(HashMap params) {
		return  rdrMapper.getRdr1012(params);
	} 
	public List<HashMap> getRdr1013(HashMap params) {
		return  rdrMapper.getRdr1013(params);
	} 
	public List<HashMap> getRdr1031(HashMap params) {
		return  rdrMapper.getRdr1031(params);
	}
	public List<HashMap> getRdr1032(HashMap params) {
		return  rdrMapper.getRdr1032(params);
	}
	public List<HashMap> getRdr1033(HashMap params) {
		return  rdrMapper.getRdr1033(params);
	}
	public List<HashMap> getRdr1034(HashMap params) {
		return  rdrMapper.getRdr1034(params);
	}
	public List<HashMap> getRdr1041(HashMap params) {
		return  rdrMapper.getRdr1041(params);
	}
	public List<HashMap> getRdr1042(HashMap params) {
		return  rdrMapper.getRdr1042(params);
	}
	public List<HashMap> getRdr1043(HashMap params) {
		return  rdrMapper.getRdr1043(params);
	}
	public List<HashMap> getRdr1071(HashMap params) {
		return  rdrMapper.getRdr1071(params);
	}
	public List<HashMap> getRdr1081(HashMap params) {
		return  rdrMapper.getRdr1081(params);
	} 
	public List<HashMap> getRdr1083(HashMap params) {
		return  rdrMapper.getRdr1083(params);
	} 
	public List<HashMap> getRdr1006(HashMap params) {
		return  rdrMapper.getRdr1006(params);
	} 
}
