package com.hk.crm.controller;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.ui.ModelMap; 
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod; 
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hk.crm.service.AdcService;
import java.util.*;
 
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.apache.tomcat.util.threads.TaskThread;

@RestController
public class AdcController {
	private static final Log log = LogFactory.getLog(TaskThread.class);
	
	@Autowired
	private AdcService adcrSv;
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  //구독처정보
	@RequestMapping(value="/api/adc/getAdc1003",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  rdrList(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			adcrSv.getAdc1003(hash);   
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("curlist",hash.get("curlist"));
			result.put("commcdcur1",hash.get("commcdcur1"));
			result.put("commcdcur2",hash.get("commcdcur2")); 
			result.put("commcdcur3",hash.get("commcdcur3")); 
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
}
