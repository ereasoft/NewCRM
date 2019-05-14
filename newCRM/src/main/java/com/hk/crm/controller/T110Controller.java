package com.hk.crm.controller;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.ui.ModelMap; 
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod; 
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hk.crm.config.Util;
import com.hk.crm.service.T110Service;
import java.util.*;

import javax.servlet.http.HttpSession;

import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.apache.tomcat.util.threads.TaskThread;

@RestController
public class T110Controller {
	private static final Log log = LogFactory.getLog(TaskThread.class); 
	HttpSession session;
	
	@Autowired
	private T110Service sv;
	
	@SuppressWarnings({ "unchecked", "rawtypes" }) 
	@RequestMapping(value="/api/t110/List",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  List(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			sv.getT110List(hash);  
			result.put("data",hash.get("currdrlist"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("totalcnt",hash.get("totalcnt")); 
			result.put("commcdcur1",hash.get("commcdcur1")); 
			result.put("commcdcur2",hash.get("commcdcur2")); 
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" }) 
	@RequestMapping(value="/api/t110/getRdr1052",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1052(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			sv.getRdr1052(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("dsctcur",hash.get("dsctcur")); 
			result.put("status", "true"); 
			result.put("success", true);  
			
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
 
	@SuppressWarnings({ "unchecked", "rawtypes" }) 
	@RequestMapping(value="/api/t110/getCoAT110",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getCoAT110(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap(); 
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = Util.changeToLowerMapKey( mapper.readValue(body, new TypeReference<HashMap>(){}));
			hash.put("incmgpers",hash.get("loginid")) ; //추후 로그인 ID로 변경
			hash.put("cns_empcnfmid",hash.get("loginid")) ; //추후 로그인 ID로 변경
			hash.put("cns_empacpnid",hash.get("loginid")) ; //추후 로그인 ID로 변경
			hash.put("cns_empcnfmflnm",hash.get("loginnm")) ; //추후 로그인 ID로 변경
			hash.put("cns_empacpnflnm",hash.get("loginnm")) ; //추후 로그인 ID로 변경
			if((boolean)hash.get("boprocyn") == true) {
				hash.put("boprocyn", "Y");
			}else {
				hash.put("boprocyn", "N");
			}
			if((boolean)hash.get("cns_empcnfmyn") == true) {
				hash.put("cns_empcnfmyn", "Y");
			}else {
				hash.put("cns_empcnfmyn", "N");
			}
			
			sv.getCoAT110(hash);  
			
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("regdt",hash.get("regdt")); 
			result.put("regno",hash.get("regno"));  
			result.put("status", "true");
			result.put("success", true);
			
		} catch(Exception ex) {
			
			 result.put("status", "false");
			result.put("success", false);
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
}
