package com.hk.crm.controller;

import java.net.URLEncoder;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.apache.tomcat.util.threads.TaskThread; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod; 

import Seed.SeedCipher;
import Seed.Base64Encoder;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hk.crm.config.Util;
import com.hk.crm.config.loginData;
import com.hk.crm.config.loginDataRedisRepository;
import com.hk.crm.service.CommonService; 


@Controller
public class mainController {
	private static final Log log = LogFactory.getLog(TaskThread.class);
	@Autowired
    private loginDataRedisRepository sessionRedis;
	
	@Autowired
	private CommonService comrSv; 
	
	@RequestMapping("/")   
	public String  index( ) {  
		return "index.html";
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@RequestMapping(value="/sslTm",  method = RequestMethod.GET)  
	public void  sslOn(String usrId, String usrNm,  HttpServletResponse rep, HttpServletRequest req )  {  

		String key = "hk_crm_yunak_sc2";
		HashMap result = new HashMap();  
		HashMap hash = new HashMap();     
		try { 
			SeedCipher seed = new SeedCipher();  
			String loginID = seed.decryptAsString(Base64Encoder.decode(usrId), key.getBytes(), "UTF-8");
			String loginNm =  URLEncoder.encode(seed.decryptAsString(Base64Encoder.decode(usrNm), key.getBytes(), "UTF-8"),"UTF-8");

			hash.put("log_id", loginID) ; 
			hash.put("sessionkey", "999") ; 
			hash.put("log_type", "1") ;
			 
			comrSv.getLogincheck(hash);   
			
     		result.put("errmsg",hash.get("errmsg"));  
			result.put("ov_id", hash.get("ov_id"));
			result.put("incmgpers", hash.get("use_persnm"));
			result.put("emp_no", hash.get("emp_no"));
			result.put("hdptcd", hash.get("hdptcd")); 
			result.put("posi", hash.get("posi"));
			result.put("deptnm", hash.get("deptnm"));
			result.put("yyyymm", hash.get("yyyymm"));
			result.put("email", hash.get("email"));
			result.put("sessionkey", hash.get("ov_guid")); 
			
			
			if(result.get("errmsg") == null) {
				result.put("status", "true"); 
				result.put("success", true);
				
				String loginDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss")) ;
				
				loginData session = loginData.builder()
						.loginId(Util.strToNull(result.get("ov_id"))) 
						.loginNm(Util.strToNull(result.get("incmgpers")))
						.emp_no(Util.strToNull(result.get("emp_no")))
						.hdptcd(Util.strToNull(result.get("hdptcd")))
						.posi(Util.strToNull(result.get("posi")))
						.deptnm(Util.strToNull(result.get("deptnm")))
						.yyyymm(Util.strToNull(result.get("yyyymm")))
						.email(Util.strToNull(result.get("email")))
						.sessionkey(Util.strToNull(result.get("sessionkey")))
						.loginDate(loginDate)
						.build();
	
				sessionRedis.save(session);		
				
				//ObjectMapper mapper = new ObjectMapper();   
				//String loginCheck =  mapper.writeValueAsString(result);  
				
				
				rep.sendRedirect("/index.html?loginID="+loginID+"&loginNm="+loginNm+"&sessionkey="+result.get("sessionkey")); 
				
			}else {
				result.put("status", "false"); 
				result.put("success", false);
			}
		}catch(Exception ex) {
			 result.put("status", "false");
			result.put("success", false);
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		
		
		
	} 
	
}
