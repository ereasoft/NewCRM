package com.hk.crm.controller;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.ui.ModelMap; 
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod; 
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hk.crm.service.AdmService; 

import java.util.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.apache.tomcat.util.threads.TaskThread;
import com.hk.crm.config.Util;

@RestController
public class AdmController {
	private static final Log log = LogFactory.getLog(TaskThread.class); 
	//private static String hash.get("loginid")="tester";
	//private static String hash.get("loginnm")="�뀒�뒪�꽣"; 
 
	
	@Autowired
	private AdmService AdmSv;
	
	//test
	//시스템관리 - 공통코드 
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1000",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1000(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1000(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("jobclsflist",hash.get("jobclsflist"));
			result.put("cdclsflist",hash.get("cdclsflist"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1001",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1001(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1001(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("jobclsf",hash.get("jobclsf"));
			result.put("cdclsf",hash.get("cdclsf"));
			result.put("cdval",hash.get("cdval"));
			result.put("cdnm",hash.get("cdnm"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1002",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1002(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1002(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("jobclsf",hash.get("jobclsf"));
			result.put("cdclsf",hash.get("cdclsf"));
			result.put("cdval",hash.get("cdval"));
			result.put("cdnm",hash.get("cdnm"));
			result.put("cdabrvnm",hash.get("cdabrvnm"));
			result.put("mangitem1",hash.get("mangitem1"));
			result.put("mangitem2",hash.get("mangitem2"));
			result.put("mangitem3",hash.get("mangitem3"));
			result.put("mangitem4",hash.get("mangitem4"));
			result.put("mangitem5",hash.get("mangitem5"));
			result.put("mangitem6",hash.get("mangitem6"));
			result.put("mangitem7",hash.get("mangitem7"));
			result.put("useyn",hash.get("useyn"));
			result.put("remk",hash.get("remk"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1010",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1010(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			
			
		
			AdmSv.getAdm1010(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("mode",hash.get("mode"));
			result.put("jobclsf",hash.get("jobclsf"));
			result.put("cdclsf",hash.get("cdclsf"));
			result.put("cdval",hash.get("cdval"));
			result.put("cdnm",hash.get("cdnm"));
			result.put("cdabrvnm",hash.get("cdabrvnm"));
			result.put("mangitem1",hash.get("mangitem1"));
			result.put("mangitem2",hash.get("mangitem2"));
			result.put("mangitem3",hash.get("mangitem3"));
			result.put("mangitem4",hash.get("mangitem4"));
			result.put("mangitem5",hash.get("mangitem5"));
			result.put("mangitem6",hash.get("mangitem6"));
			result.put("mangitem7",hash.get("mangitem7"));
			result.put("useyn",hash.get("useyn"));
			result.put("remk",hash.get("remk"));
			result.put("incmgpers",hash.get("incmgpers"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	//시스템관리 - 계정코드
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1201",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1201(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1201(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("imptexpnclsf",hash.get("imptexpnclsf"));
			result.put("acctcd",hash.get("acctcd"));
			result.put("acctnm",hash.get("acctnm"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
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
		
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1202",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1202(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1202(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("acctcd",hash.get("acctcd"));
			result.put("imptexpnclsf",hash.get("imptexpnclsf"));
			result.put("acctnm",hash.get("acctnm"));
			result.put("imptexpnclsf",hash.get("imptexpnclsf"));
			result.put("acctmclscd",hash.get("acctmclscd"));
			result.put("remk",hash.get("remk"));
			result.put("curlist",hash.get("curlist"));
			result.put("curlist2",hash.get("curlist2"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1203",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1203(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1203(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("imptexpnclsf",hash.get("imptexpnclsf"));
			result.put("curlist",hash.get("curlist"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1210",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1210(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1210(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("mode",hash.get("mode"));
			result.put("acctcd",hash.get("acctcd"));
			result.put("acctnm",hash.get("acctnm"));
			result.put("imptexpnclsf",hash.get("imptexpnclsf"));
			result.put("acctmclscd",hash.get("acctmclscd"));
			result.put("remk",hash.get("remk"));
			result.put("incmgpers",hash.get("incmgpers"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	

	//시스템관리 - 우편번호 - 지번주소
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1301",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1301(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1301(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("zip1",hash.get("zip1"));
			result.put("zip2",hash.get("zip2"));
			result.put("addr3",hash.get("addr3"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1302",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1302(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1302(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("zip1",hash.get("zip1"));
			result.put("zip2",hash.get("zip2"));
			result.put("zip3",hash.get("zip3"));
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1310",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1310(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1310(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("mode",hash.get("mode"));
			result.put("zip1",hash.get("zip1"));
			result.put("zip2",hash.get("zip2"));
			result.put("zip3",hash.get("zip3"));
			result.put("zip4",hash.get("zip4"));
			result.put("addr1",hash.get("addr1"));
			result.put("addr2",hash.get("addr2"));
			result.put("addr3",hash.get("addr3"));
			result.put("isld",hash.get("isld"));
			result.put("largedlvplac",hash.get("largedlvplac"));
			result.put("bgnetno",hash.get("bgnetno"));
			result.put("endetno",hash.get("endetno"));
			result.put("bocd",hash.get("bocd"));
			result.put("incmgpers",hash.get("incmgpers"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1320",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1320(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1320(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("zip1",hash.get("zip1"));
			result.put("zip2",hash.get("zip2"));
			result.put("zip3",hash.get("zip3"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	//시스템관리 - 우편번호 - 도로명주소
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm2601",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm2601(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm2601(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("zip1",hash.get("zip1"));
			result.put("zip2",hash.get("zip2"));
			result.put("drm",hash.get("drm"));
			result.put("fr_bldgno",hash.get("fr_bldgno"));
			result.put("to_bldgno",hash.get("to_bldgno"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm2602",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm2602(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm2602(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("zip1",hash.get("zip1"));
			result.put("zip2",hash.get("zip2"));
			result.put("zip3",hash.get("zip3"));
			result.put("addr1",hash.get("addr1"));
			result.put("addr2",hash.get("addr2"));
			result.put("addr3",hash.get("addr3"));
			result.put("drm",hash.get("drm"));
			result.put("bldgno1",hash.get("bldgno1"));
			result.put("bldgno2",hash.get("bldgno2"));
			result.put("bocd",hash.get("bocd"));
			result.put("bonm",hash.get("bonm"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm2610",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm2610(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm2610(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("zip1",hash.get("zip1"));
			result.put("zip2",hash.get("zip2"));
			result.put("zip3",hash.get("zip3"));
			result.put("fr_bldgno",hash.get("fr_bldgno"));
			result.put("to_bldgno",hash.get("to_bldgno"));
			result.put("bocd",hash.get("bocd"));
			result.put("incmgpers",hash.get("incmgpers"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	//시스템관리 - 권한관리 - 메뉴 
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1801",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1801(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1801(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("sys",hash.get("sys"));
			result.put("menuno",hash.get("menuno"));
			result.put("menunm",hash.get("menunm"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1802",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1802(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1802(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("sys",hash.get("sys"));
			result.put("menuno",hash.get("menuno"));
			result.put("sys",hash.get("sys"));
			result.put("suprmenu",hash.get("suprmenu"));
			result.put("menunm",hash.get("menunm"));
			result.put("pgmno",hash.get("pgmno"));
			result.put("remk",hash.get("remk"));
			result.put("useyn",hash.get("useyn"));
			result.put("curlist",hash.get("curlist"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1803",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1803(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1803(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("sys",hash.get("sys"));
			result.put("curlist",hash.get("curlist"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1810",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1810(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1810(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("mode",hash.get("mode"));
			result.put("menuno",hash.get("menuno"));
			result.put("h_menuno",hash.get("h_menuno"));
			result.put("sys",hash.get("sys"));
			result.put("suprmenu",hash.get("suprmenu"));
			result.put("menunm",hash.get("menunm"));
			result.put("pgmno",hash.get("pgmno"));
			result.put("remk",hash.get("remk"));
			result.put("useyn",hash.get("useyn"));
			result.put("incmgpers",hash.get("incmgpers"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	//시스템관리 - 권한관리 - 업무그룹 
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1901",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1901(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1901(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("jobgrpnm",hash.get("jobgrpnm"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1902",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1902(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1902(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("jobgrpcd",hash.get("jobgrpcd"));
			result.put("jobgrpnm",hash.get("jobgrpnm"));
			result.put("remk",hash.get("remk"));

			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1904",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1904(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1904(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("menuno",hash.get("menuno"));
			result.put("jobgrpcd",hash.get("jobgrpcd"));
			result.put("pageno",hash.get("pageno"));
			result.put("curlist",hash.get("curlist"));

			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1910",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1910(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1910(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("mode",hash.get("mode"));
			result.put("jobgrpcd",hash.get("jobgrpcd"));
			result.put("jobgrpnm",hash.get("jobgrpnm"));
			result.put("remk",hash.get("remk"));
			result.put("incmgpers",hash.get("incmgpers"));

			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm1911",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm1911(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm1911(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("jobgrpcd",hash.get("jobgrpcd"));
			result.put("menuno",hash.get("menuno"));
			result.put("usecmpc",hash.get("usecmpc"));
			result.put("incmgcmpc",hash.get("incmgcmpc"));
			result.put("brwscmpc",hash.get("brwscmpc"));
			result.put("updcmpc",hash.get("updcmpc"));
			result.put("delcmpc",hash.get("delcmpc"));
			result.put("incmgpers",hash.get("incmgpers"));

			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	//시스템관리 - 권한관리 - 사용자 
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm2000",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm2000(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm2000(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("curlist",hash.get("curlist"));
			result.put("deptlist",hash.get("deptlist"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm2001",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm2001(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm2001(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("dept",hash.get("dept"));
			result.put("use_persnm",hash.get("use_persnm"));
			result.put("jobgrpcd",hash.get("jobgrpcd"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm2002",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm2002(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm2002(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("id",hash.get("id"));
			result.put("pswd",hash.get("pswd"));
			result.put("use_persnm",hash.get("use_persnm"));
			result.put("jobgrpcd",hash.get("jobgrpcd"));
			result.put("emp_no",hash.get("emp_no"));
			result.put("dept",hash.get("dept"));
			result.put("hdptcd",hash.get("hdptcd"));
			result.put("posi",hash.get("posi"));
			result.put("bocd",hash.get("bocd"));
			result.put("macaddr1",hash.get("macaddr1"));
			result.put("macaddr2",hash.get("macaddr2"));
			result.put("macaddr3",hash.get("macaddr3"));
			result.put("usepccnt",hash.get("usepccnt"));
			result.put("passwdtry",hash.get("passwdtry"));
			result.put("lastlogindt",hash.get("lastlogindt"));
			result.put("useyn",hash.get("useyn"));
			result.put("remk",hash.get("remk"));
			result.put("curlist",hash.get("curlist"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm2010",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm2010(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm2010(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("mode",hash.get("mode"));
			result.put("id",hash.get("id"));
			result.put("pswd",hash.get("pswd"));
			result.put("use_persnm",hash.get("use_persnm"));
			result.put("jobgrpcd",hash.get("jobgrpcd"));
			result.put("emp_no",hash.get("emp_no"));
			result.put("dept",hash.get("dept"));
			result.put("hdptcd",hash.get("hdptcd"));
			result.put("posi",hash.get("posi"));
			result.put("bocd",hash.get("bocd"));
			result.put("macaddr1",hash.get("macaddr1"));
			result.put("macaddr2",hash.get("macaddr2"));
			result.put("macaddr3",hash.get("macaddr3"));
			result.put("usepccnt",hash.get("usepccnt"));
			result.put("passwdtry",hash.get("passwdtry"));
			result.put("remk",hash.get("remk"));
			result.put("useyn",hash.get("useyn"));
			result.put("incmgpers",hash.get("incmgpers"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	//시스템관리 - 지국마감
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm2101",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm2101(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm2101(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("bocd_txt",hash.get("bocd_txt"));
			result.put("yymm",hash.get("yymm"));
			result.put("closyn",hash.get("closyn"));
			result.put("bocd_gbn",hash.get("bocd_gbn"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm2110",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm2110(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm2110(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd_arg",hash.get("bocd_arg"));
			result.put("basiyymm_arg",hash.get("basiyymm_arg"));
			result.put("closfrdt_arg",hash.get("closfrdt_arg"));
			result.put("clostodt_arg",hash.get("clostodt_arg"));
			result.put("incmgpers",hash.get("incmgpers"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getAdm2120",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAdm2120(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getAdm2120(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("mode",hash.get("mode"));
			result.put("bocd_arg",hash.get("bocd_arg"));
			result.put("boseq_arg",hash.get("boseq_arg"));
			result.put("basiyymm_arg",hash.get("basiyymm_arg"));
			result.put("closfrdt_arg",hash.get("closfrdt_arg"));
			result.put("clostodt_arg",hash.get("clostodt_arg"));
			result.put("pre_yymm_arg",hash.get("pre_yymm_arg"));
			result.put("nxt_yymm_arg",hash.get("nxt_yymm_arg"));
			result.put("unrcpcrteyn",hash.get("unrcpcrteyn"));
			result.put("incmgpers",hash.get("incmgpers"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	//시스템관리 - 구역코드
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getBsc1401",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getBsc1401(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getBsc1401(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("teamcd",hash.get("teamcd"));
			result.put("dstccd",hash.get("dstccd"));
			result.put("dstcnm",hash.get("dstcnm"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getBsc1402",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getBsc1402(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getBsc1402(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("dstccd",hash.get("dstccd"));
			result.put("teamcd",hash.get("teamcd"));
			result.put("dstcnm",hash.get("dstcnm"));
			result.put("apthoscnt",hash.get("apthoscnt"));
			result.put("villahoscnt",hash.get("villahoscnt"));
			result.put("offiroomhoscnt",hash.get("offiroomhoscnt"));
			result.put("shophoscnt",hash.get("shophoscnt"));
			result.put("houshoscnt",hash.get("houshoscnt"));
			result.put("etchoscnt",hash.get("etchoscnt"));
			result.put("remk",hash.get("remk"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Adm/getBsc1410",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getBsc1410(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AdmSv.getBsc1410(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("mode",hash.get("mode"));
			result.put("bocd",hash.get("bocd"));
			result.put("dstccd",hash.get("dstccd"));
			result.put("dstcnm",hash.get("dstcnm"));
			result.put("teamcd",hash.get("teamcd"));
			result.put("apthoscnt",hash.get("apthoscnt"));
			result.put("houshoscnt",hash.get("houshoscnt"));
			result.put("shophoscnt",hash.get("shophoscnt"));
			result.put("offiroomhoscnt",hash.get("offiroomhoscnt"));
			result.put("remk",hash.get("remk"));
			result.put("incmgpers",hash.get("incmgpers"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
