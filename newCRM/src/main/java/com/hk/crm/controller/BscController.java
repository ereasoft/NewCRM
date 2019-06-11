package com.hk.crm.controller;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.ui.ModelMap; 
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod; 
import org.springframework.web.bind.annotation.RestController;

//import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hk.crm.service.BscService; 

import java.util.*;

//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpSession;

import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.apache.tomcat.util.threads.TaskThread;
//import com.hk.crm.config.Util;

@RestController
public class BscController {
	private static final Log log = LogFactory.getLog(TaskThread.class); 
	//private static String hash.get("loginid")="tester";
	//private static String hash.get("loginnm")="�뀒�뒪�꽣"; 
 
	
	@Autowired
	private BscService BscSv;
	
	//안내문관리 - 조회 
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/bsc/getBsc2401",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getBsc2401(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			BscSv.getBsc2401(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
//			result.put("bocd",hash.get("bocd"));
//			result.put("guidclsfcd",hash.get("guidclsfcd"));
//			result.put("guidwrtgcd",hash.get("guidwrtgcd"));
//			result.put("pageno",hash.get("pageno"));
//			result.put("pagesize",hash.get("pagesize"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("curlist",hash.get("curlist"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	//안내문관리 - 생성/수정/삭제 
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/bsc/getBsc2410",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getBsc2410(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			BscSv.getBsc2410(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
//			result.put("mode",hash.get("mode"));
//			result.put("bocd",hash.get("bocd"));
//			result.put("guidclsfcd",hash.get("guidclsfcd"));
//			result.put("guidwrtgcd",hash.get("guidwrtgcd"));
//			result.put("descri",hash.get("descri"));
//			result.put("line1",hash.get("line1"));
//			result.put("line2",hash.get("line2"));
//			result.put("line3",hash.get("line3"));
//			result.put("line4",hash.get("line4"));
//			result.put("line5",hash.get("line5"));
//			result.put("line6",hash.get("line6"));
//			result.put("line7",hash.get("line7"));
//			result.put("line8",hash.get("line8"));
//			result.put("line9",hash.get("line9"));
//			result.put("line10",hash.get("line10"));
//			result.put("line11",hash.get("line11"));
//			result.put("line12",hash.get("line12"));
//			result.put("line13",hash.get("line13"));
//			result.put("incmgpers",hash.get("incmgpers"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	
}
