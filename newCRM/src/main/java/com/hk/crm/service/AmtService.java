package com.hk.crm.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hk.crm.mapper.AmtMapper;

@Service
@SuppressWarnings("rawtypes")
public class AmtService {
	
	 @Autowired
	 private AmtMapper amtMapper;
	  
	//지로EDI 
	public List<HashMap> getAmt1001(HashMap params) {
		return  amtMapper.getAmt1001(params);
	}	
	public List<HashMap> getAmt1002(HashMap params) {
		return  amtMapper.getAmt1002(params);
	}	
	public List<HashMap> getAmt1003(HashMap params) {
		return  amtMapper.getAmt1003(params);
	}	
	public List<HashMap> getAmt1004(HashMap params) {
		return  amtMapper.getAmt1004(params);
	}	
	public List<HashMap> getAmt1005(HashMap params) {
		return  amtMapper.getAmt1005(params);
	}	
	public List<HashMap> getAmt1006(HashMap params) {
		return  amtMapper.getAmt1006(params);
	}	
	public List<HashMap> getAmt1007(HashMap params) {
		return  amtMapper.getAmt1007(params);
	}	
	public List<HashMap> getAmt1008(HashMap params) {
		return  amtMapper.getAmt1008(params);
	}	
	public List<HashMap> getAmt1009(HashMap params) {
		return  amtMapper.getAmt1009(params);
	}	

	
	// 지로영수증 발행 - 일괄
	public List<HashMap> getAmt1700(HashMap params) {
		return  amtMapper.getAmt1700(params);
	}	
	public List<HashMap> getAmt1701(HashMap params) {
		return  amtMapper.getAmt1701(params);
	}	
	public List<HashMap> getAmt1702(HashMap params) {
		return  amtMapper.getAmt1702(params);
	}	
	public List<HashMap> getAmt1703(HashMap params) {
		return  amtMapper.getAmt1703(params);
	}	
	public List<HashMap> getAmt1703_GIROA4X3(HashMap params) {
		return  amtMapper.getAmt1703_GIROA4X3(params);
	}	
	public List<HashMap> getAmt1704(HashMap params) {
		return  amtMapper.getAmt1704(params);
	}	
	public List<HashMap> getAmt1705(HashMap params) {
		return  amtMapper.getAmt1705(params);
	}	
	
	// 지로영수증 발행 - 낱장
	public List<HashMap> getAmt2000(HashMap params) {
		return  amtMapper.getAmt2000(params);
	}	
	public List<HashMap> getAmt2001(HashMap params) {
		return  amtMapper.getAmt2001(params);
	}	
	public List<HashMap> getAmt2002(HashMap params) {
		return  amtMapper.getAmt2002(params);
	}	
	public List<HashMap> getAmt2003(HashMap params) {
		return  amtMapper.getAmt2003(params);
	}	
	public List<HashMap> getAmt2004(HashMap params) {
		return  amtMapper.getAmt2004(params);
	}	
	public List<HashMap> getAmt2005(HashMap params) {
		return  amtMapper.getAmt2005(params);
	}	
	
	
	// 자동이체 - 신청관리
	public List<HashMap> getAmt1300(HashMap params) {
		return  amtMapper.getAmt1300(params);
	}	
	public List<HashMap> getAmt1301(HashMap params) {
		return  amtMapper.getAmt1301(params);
	}	
	public List<HashMap> getAmt1302(HashMap params) {
		return  amtMapper.getAmt1302(params);
	}	
	public List<HashMap> getAmt1303(HashMap params) {
		return  amtMapper.getAmt1303(params);
	}	
	public List<HashMap> getAmt1304(HashMap params) {
		return  amtMapper.getAmt1304(params);
	}	
	public List<HashMap> getAmt1305(HashMap params) {
		return  amtMapper.getAmt1305(params);
	}	
	public List<HashMap> getAmt1306(HashMap params) {
		return  amtMapper.getAmt1306(params);
	}	
	public List<HashMap> getAmt1307(HashMap params) {
		return  amtMapper.getAmt1307(params);
	}	
	
	// 자동이체 - 신청작업관리
	public List<HashMap> getAmt1400(HashMap params) {
		return  amtMapper.getAmt1400(params);
	}		
	public List<HashMap> getAmt1401(HashMap params) {
		return  amtMapper.getAmt1401(params);
	}		
	public List<HashMap> getAmt1402(HashMap params) {
		return  amtMapper.getAmt1402(params);
	}		
	public List<HashMap> getAmt1403(HashMap params) {
		return  amtMapper.getAmt1403(params);
	}		
	public List<HashMap> getAmt1405(HashMap params) {
		return  amtMapper.getAmt1405(params);
	}		
	public List<HashMap> getAmt1408(HashMap params) {
		return  amtMapper.getAmt1408(params);
	}		
	public List<HashMap> getAmt1409(HashMap params) {
		return  amtMapper.getAmt1409(params);
	}		
	public List<HashMap> getAmt1410(HashMap params) {
		return  amtMapper.getAmt1410(params);
	}		
	public List<HashMap> getAmt1411(HashMap params) {
		return  amtMapper.getAmt1411(params);
	}		
	public List<HashMap> getAmt1412(HashMap params) {
		return  amtMapper.getAmt1412(params);
	}		
	public List<HashMap> getAmt1413(HashMap params) {
		return  amtMapper.getAmt1413(params);
	}		
	public List<HashMap> getAmt1433(HashMap params) {
		return  amtMapper.getAmt1433(params);
	}		
	
	//자동이체 - 자동이체 승인오류 관리
	public List<HashMap> getAmt3000(HashMap params) {
		return  amtMapper.getAmt3000(params);
	}	
	public List<HashMap> getAmt3001(HashMap params) {
		return  amtMapper.getAmt3001(params);
	}	
	public List<HashMap> getAmt3002(HashMap params) {
		return  amtMapper.getAmt3002(params);
	}	
	public List<HashMap> getAmt3004(HashMap params) {
		return  amtMapper.getAmt3004(params);
	}	
	
	//자동이체 - 현황조회
	public List<HashMap> getAmt1501(HashMap params) {
		return  amtMapper.getAmt1501(params);
	}	
	
	//자동이체 - 청구관리
	public List<HashMap> getAmt1601(HashMap params) {
		return  amtMapper.getAmt1601(params);
	}		
	public List<HashMap> getAmt1602(HashMap params) {
		return  amtMapper.getAmt1602(params);
	}		
	public List<HashMap> getAmt1603(HashMap params) {
		return  amtMapper.getAmt1603(params);
	}		
	public List<HashMap> getAmt1604(HashMap params) {
		return  amtMapper.getAmt1604(params);
	}		
	public List<HashMap> getAmt1606(HashMap params) {
		return  amtMapper.getAmt1606(params);
	}		
	public List<HashMap> getAmt1607(HashMap params) {
		return  amtMapper.getAmt1607(params);
	}		
	public List<HashMap> getAmt1608(HashMap params) {
		return  amtMapper.getAmt1608(params);
	}		
	public List<HashMap> getAmt1609(HashMap params) {
		return  amtMapper.getAmt1609(params);
	}		
	public List<HashMap> getAmt1610(HashMap params) {
		return  amtMapper.getAmt1610(params);
	}		
	
	//자동이체 - 청구결과
	public List<HashMap> getSSAmt1701(HashMap params) {
		return  amtMapper.getSSAmt1701(params);
	}	
	
	public List<HashMap> getSSAmt1702(HashMap params) {
		return  amtMapper.getSSAmt1702(params);
	}	
	
	//자동이체 - 납부자관리
	public List<HashMap> getAmt1800(HashMap params) {
		return  amtMapper.getAmt1800(params);
	}	
	public List<HashMap> getAmt1801(HashMap params) {
		return  amtMapper.getAmt1801(params);
	}	
	public List<HashMap> getAmt1802(HashMap params) {
		return  amtMapper.getAmt1802(params);
	}	
	public List<HashMap> getAmt1803(HashMap params) {
		return  amtMapper.getAmt1803(params);
	}	
	public List<HashMap> getAmt1804(HashMap params) {
		return  amtMapper.getAmt1804(params);
	}	
	public List<HashMap> getAmt1805(HashMap params) {
		return  amtMapper.getAmt1805(params);
	}	
	public List<HashMap> getAmt1806(HashMap params) {
		return  amtMapper.getAmt1806(params);
	}	
	public List<HashMap> getAmt1807(HashMap params) {
		return  amtMapper.getAmt1807(params);
	}	
	public List<HashMap> getAmt1808(HashMap params) {
		return  amtMapper.getAmt1808(params);
	}	
	public List<HashMap> getAmt1809(HashMap params) {
		return  amtMapper.getAmt1809(params);
	}	
	public List<HashMap> getAmt1810(HashMap params) {
		return  amtMapper.getAmt1810(params);
	}	
	public List<HashMap> getAmt1811(HashMap params) {
		return  amtMapper.getAmt1811(params);
	}	
	public List<HashMap> getAmt1813(HashMap params) {
		return  amtMapper.getAmt1813(params);
	}	

	//휴대폰 자동이체
	public List<HashMap> getAmt2701(HashMap params) {
		return  amtMapper.getAmt2701(params);
	}	
	public List<HashMap> getAmt2702(HashMap params) {
		return  amtMapper.getAmt2702(params);
	}	
	public List<HashMap> getAmt2705(HashMap params) {
		return  amtMapper.getAmt2705(params);
	}	
	public List<HashMap> getAmt2707(HashMap params) {
		return  amtMapper.getAmt2707(params);
	}	
	
	//카드 자동이체 - 카드청구(기존)	
	public List<HashMap> getAmt2801(HashMap params) {
		return  amtMapper.getAmt2801(params);
	}	
	public List<HashMap> getAmt2802(HashMap params) {
		return  amtMapper.getAmt2802(params);
	}	
	public List<HashMap> getAmt2805(HashMap params) {
		return  amtMapper.getAmt2805(params);
	}	
	public List<HashMap> getAmt2807(HashMap params) {
		return  amtMapper.getAmt2807(params);
	}		
	
	//카드 자동이체 - 카드청구(신규)	
	public List<HashMap> getAmt4301(HashMap params) {
		return  amtMapper.getAmt4301(params);
	}	
	public List<HashMap> getAmt4302(HashMap params) {
		return  amtMapper.getAmt4302(params);
	}	
	public List<HashMap> getAmt4307(HashMap params) {
		return  amtMapper.getAmt4307(params);
	}		
	
	//독자환불관리
	public List<HashMap> getAmt3201(HashMap params) {
		return  amtMapper.getAmt3201(params);
	}	
	public List<HashMap> getAmt3205(HashMap params) {
		return  amtMapper.getAmt3205(params);
	}	

	//지국이체 - 지국송금이체
	public List<HashMap> getAmt2601(HashMap params) {
		return  amtMapper.getAmt2601(params);
	}	
	public List<HashMap> getAmt2602(HashMap params) {
		return  amtMapper.getAmt2602(params);
	}	
	public List<HashMap> getAmt2603(HashMap params) {
		return  amtMapper.getAmt2603(params);
	}	
	public List<HashMap> getAmt2604(HashMap params) {
		return  amtMapper.getAmt2604(params);
	}	
	public List<HashMap> getAmt2606(HashMap params) {
		return  amtMapper.getAmt2606(params);
	}	
	public List<HashMap> getAmt2608(HashMap params) {
		return  amtMapper.getAmt2608(params);
	}	
	public List<HashMap> getAmt2610(HashMap params) {
		return  amtMapper.getAmt2610(params);
	}	
	public List<HashMap> getAmt2611(HashMap params) {
		return  amtMapper.getAmt2611(params);
	}	
	public List<HashMap> getAmt2612(HashMap params) {
		return  amtMapper.getAmt2612(params);
	}	
	

	
}
