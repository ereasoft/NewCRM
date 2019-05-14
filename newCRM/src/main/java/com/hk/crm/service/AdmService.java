package com.hk.crm.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hk.crm.mapper.AdmMapper;

@Service
@SuppressWarnings("rawtypes")
public class AdmService {
	
	 @Autowired
	 private AdmMapper admMapper;
	  
	//시스템관리 - 공통코드 
	public List<HashMap> getAdm1000(HashMap params) {
		return  admMapper.getAdm1000(params);
	}	
	public List<HashMap> getAdm1001(HashMap params) {
		return  admMapper.getAdm1001(params);
	}	
	public List<HashMap> getAdm1002(HashMap params) {
		return  admMapper.getAdm1002(params);
	}	
	public List<HashMap> getAdm1010(HashMap params) {
		return  admMapper.getAdm1010(params);
	}	
	
	//시스템관리 - 계정코드 
	public List<HashMap> getAdm1201(HashMap params) {
		return  admMapper.getAdm1201(params);
	}		
	public List<HashMap> getAdm1202(HashMap params) {
		return  admMapper.getAdm1202(params);
	}		
	public List<HashMap> getAdm1203(HashMap params) {
		return  admMapper.getAdm1203(params);
	}		
	public List<HashMap> getAdm1210(HashMap params) {
		return  admMapper.getAdm1210(params);
	}		
	
	//시스템관리 - 우편번호 - 지번주소	
	public List<HashMap> getAdm1301(HashMap params) {
		return  admMapper.getAdm1301(params);
	}	
	public List<HashMap> getAdm1302(HashMap params) {
		return  admMapper.getAdm1302(params);
	}	
	public List<HashMap> getAdm1310(HashMap params) {
		return  admMapper.getAdm1310(params);
	}	
	public List<HashMap> getAdm1320(HashMap params) {
		return  admMapper.getAdm1320(params);
	}	
	
	//시스템관리 - 우편번호 - 도로명주소
	public List<HashMap> getAdm2601(HashMap params) {
		return  admMapper.getAdm2601(params);
	}	
	
	public List<HashMap> getAdm2602(HashMap params) {
		return  admMapper.getAdm2602(params);
	}	
	
	public List<HashMap> getAdm2610(HashMap params) {
		return  admMapper.getAdm2610(params);
	}	
	
	//시스템관리 - 권한관리 - 메뉴 
	public List<HashMap> getAdm1801(HashMap params) {
		return  admMapper.getAdm1801(params);
	}	
	
	public List<HashMap> getAdm1802(HashMap params) {
		return  admMapper.getAdm1802(params);
	}	
	
	public List<HashMap> getAdm1803(HashMap params) {
		return  admMapper.getAdm1803(params);
	}	
	
	public List<HashMap> getAdm1810(HashMap params) {
		return  admMapper.getAdm1810(params);
	}	
	
	//시스템관리 - 권한관리 - 업무그룹 
	public List<HashMap> getAdm1901(HashMap params) {
		return  admMapper.getAdm1901(params);
	}	
	
	public List<HashMap> getAdm1902(HashMap params) {
		return  admMapper.getAdm1902(params);
	}	

	public List<HashMap> getAdm1904(HashMap params) {
		return  admMapper.getAdm1904(params);
	}	

	public List<HashMap> getAdm1910(HashMap params) {
		return  admMapper.getAdm1910(params);
	}	

	public List<HashMap> getAdm1911(HashMap params) {
		return  admMapper.getAdm1911(params);
	}	

	//시스템관리 - 권한관리 - 사용자 
	public List<HashMap> getAdm2000(HashMap params) {
		return  admMapper.getAdm2000(params);
	}
	
	public List<HashMap> getAdm2001(HashMap params) {
		return  admMapper.getAdm2001(params);
	}
	
	public List<HashMap> getAdm2002(HashMap params) {
		return  admMapper.getAdm2002(params);
	}
	
	public List<HashMap> getAdm2010(HashMap params) {
		return  admMapper.getAdm2010(params);
	}
	
	//시스템관리 - 지국마감
	public List<HashMap> getAdm2101(HashMap params) {
		return  admMapper.getAdm2101(params);
	}
	
	public List<HashMap> getAdm2110(HashMap params) {
		return  admMapper.getAdm2110(params);
	}
	
	public List<HashMap> getAdm2120(HashMap params) {
		return  admMapper.getAdm2120(params);
	}
	
	//시스템관리 - 구역코드
	public List<HashMap> getBsc1401(HashMap params) {
		return  admMapper.getBsc1401(params);
	}
	
	public List<HashMap> getBsc1402(HashMap params) {
		return  admMapper.getBsc1402(params);
	}
	
	public List<HashMap> getBsc1410(HashMap params) {
		return  admMapper.getBsc1410(params);
	}	
	
}
