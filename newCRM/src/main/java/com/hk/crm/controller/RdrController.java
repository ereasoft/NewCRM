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
import com.hk.crm.service.RdrService;

import java.util.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.apache.tomcat.util.threads.TaskThread;
import com.hk.crm.config.Util;

@RestController
public class RdrController {
	private static final Log log = LogFactory.getLog(TaskThread.class); 
	//private static String hash.get("loginid")="tester";
	//private static String hash.get("loginnm")="테스터"; 
 
	
	@Autowired
	private RdrService rdrSv;
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  //독자정보
	@RequestMapping(value="/api/rdr/rdrList",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  rdrList(  @RequestBody String body,ModelMap model ) {  
		
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			rdrSv.getRdrList(hash);  
			result.put("data",hash.get("currdrlist"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("totalvalqty",hash.get("totalvalqty")); 
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	} 
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  //수금상세정보
	@RequestMapping(value="/api/rdr/getRdr1022",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1022(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			rdrSv.getRdr1022(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("curryymm",hash.get("curryymm")); 
			result.put("realsubsamt",hash.get("realsubsamt"));
			result.put("defaultcur",hash.get("defaultcur"));
			result.put("clamtcur",hash.get("clamtcur")); 
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  //독자상세정보
	@RequestMapping(value="/api/rdr/getRdr1002",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1002(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			rdrSv.getRdr1002(hash);   
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("rptvmedicd",hash.get("rptvmedicd"));
			result.put("readercur",hash.get("readercur"));
			result.put("dstccdcur",hash.get("dstccdcur"));
			result.put("addrcdcur",hash.get("addrcdcur"));
			result.put("commcdcur1",hash.get("commcdcur1"));
			result.put("commcdcur2",hash.get("commcdcur2"));
			result.put("commcdcur3",hash.get("commcdcur3")); 
			result.put("commcdcur4",hash.get("commcdcur4"));
			result.put("commcdcur5",hash.get("commcdcur5")); 
			result.put("commcdcur6",hash.get("commcdcur6")); 
			result.put("telnocur",hash.get("telnocur"));
			result.put("ptphnocur",hash.get("ptphnocur")); 
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	

	@SuppressWarnings({ "unchecked", "rawtypes"})  //독자정보 수정
	@RequestMapping(value="/api/rdr/getRdr1004",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1004(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper();   
			HashMap hash = new HashMap();   
			hash =Util.changeToLowerMapKey( mapper.readValue(body, new TypeReference<HashMap>(){}));   
			hash.put("incmgpers",hash.get("loginid")) ; //추후 로그인 ID로 변경
			rdrSv.getRdr1004(hash);  
			result.put("data",hash.get("currdrlist"));
			result.put("errmsg",hash.get("errmsg")); 
			result.put("success", true);
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("success", false);
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })  //기타정보
	@RequestMapping(value="/api/rdr/getRdr1006",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1006(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			rdrSv.getRdr1006(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("rptvmedicd",hash.get("rptvmedicd")); 
			result.put("readercur",hash.get("readercur"));  
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  //매체정보
	@RequestMapping(value="/api/rdr/getRdr1003",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1003(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			rdrSv.getRdr1003(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("rdrmedicur",hash.get("rdrmedicur"));
			result.put("medikindcur",hash.get("medikindcur")); 
			result.put("commcdcur1",hash.get("commcdcur1"));
			result.put("commcdcur2",hash.get("commcdcur2"));
			result.put("commcdcur3",hash.get("commcdcur3")); 
			result.put("commcdcur4",hash.get("commcdcur4"));  
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" }) //수금내역
	@RequestMapping(value="/api/rdr/getRdr1021",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1021(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			rdrSv.getRdr1021(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg")); 
			result.put("unrcpamt",hash.get("unrcpamt"));
			result.put("curryymm",hash.get("curryymm"));
			result.put("prevyymm",hash.get("prevyymm"));
			result.put("nextyymm",hash.get("nextyymm"));
			result.put("medicdcur",hash.get("medicdcur")); 
			result.put("data",hash.get("clamtcur")); 
			result.put("brfcur",hash.get("brfcur")); 
			result.put("brfcur2",hash.get("brfcur2")); 
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" }) //수금처리
	@RequestMapping(value="/api/rdr/getRdr1023",  method = RequestMethod.POST, headers="Accept=application/json")  
	@JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul") 
	public  HashMap  getRdr1023(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap(); 
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();  
			hash =Util.changeToLowerMapKey( mapper.readValue(body, new TypeReference<HashMap>(){}));  
			hash.put("incmgpers",hash.get("loginid")) ; //추후 로그인 ID로 변경
			hash.put("recpdt",hash.get("recpdt2"));  //스트링날짜로 변경 - 날짜로 리퀘스트시 날짜가 23시간 이전 날짜로 변경되어 임시조치
			rdrSv.getRdr1023(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg")); 
			result.put("success", true);
			result.put("status", "true");
		} catch(Exception ex) {
			result.put("success", false);
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" }) //구독매체
	@RequestMapping(value="/api/rdr/getRdr1011",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1011(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			rdrSv.getRdr1011(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("medicdcur",hash.get("medicdcur"));
			result.put("data",hash.get("cursubscntrlist")); 
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" }) //구독매체상세
	@RequestMapping(value="/api/rdr/getRdr1012",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1012(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			rdrSv.getRdr1012(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg")); 
			result.put("medicdcur",hash.get("medicdcur")); 
			result.put("commcdcur1",hash.get("commcdcur1")); 
			result.put("commcdcur2",hash.get("commcdcur2"));
			result.put("commcdcur3",hash.get("commcdcur3"));
			result.put("cursubscntrlist",hash.get("cursubscntrlist")); 
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" }) //구독추가
	@RequestMapping(value="/api/rdr/getRdr1013",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1013(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash =Util.changeToLowerMapKey( mapper.readValue(body, new TypeReference<HashMap>(){}));  
			
			rdrSv.getRdr1013(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));  
			result.put("ov_cntrno",hash.get("ov_cntrno"));
			result.put("ov_mangno",hash.get("ov_mangno"));  
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" }) //중지상세내역
	@RequestMapping(value="/api/rdr/getRdr1031",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1031(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			rdrSv.getRdr1031(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("data",hash.get("rdrmedicur")); 
			result.put("commcdcur1",hash.get("commcdcur1")); 
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" }) //중지내역
	@RequestMapping(value="/api/rdr/getRdr1032",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1032(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap(); 
 
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			rdrSv.getRdr1032(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("totalcnt",hash.get("totalcnt")); 
			result.put("data",hash.get("rdrsuspcur")); 
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" }) //중지취소
	@RequestMapping(value="/api/rdr/getRdr1033",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1033(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();    
			hash =Util.changeToLowerMapKey( mapper.readValue(body, new TypeReference<HashMap>(){}));  
			hash.put("incmgpers",hash.get("loginid")) ; //추후 로그인 ID로 변경
			
			rdrSv.getRdr1033(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));  
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" }) //중지변경
	@RequestMapping(value="/api/rdr/getRdr1034",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1034(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();    
			hash =Util.changeToLowerMapKey( mapper.readValue(body, new TypeReference<HashMap>(){}));  
			hash.put("incmgpers",hash.get("loginid")) ; //추후 로그인 ID로 변경
			hash.put("suspdt",hash.get("suspdt2"));
			
			rdrSv.getRdr1034(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));  
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" }) //이사내역
	@RequestMapping(value="/api/rdr/getRdr1041",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1041(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			rdrSv.getRdr1041(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("totalcnt",hash.get("totalcnt")); 
			result.put("data",hash.get("moverdrcur")); 
			result.put("commcdcur1",hash.get("commcdcur1")); 
			result.put("telnocur",hash.get("telnocur")); 
			result.put("ptphnocur",hash.get("ptphnocur")); 
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" }) //이사상세내역
	@RequestMapping(value="/api/rdr/getRdr1042",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1042(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			rdrSv.getRdr1042(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg")); 
			result.put("moverdrcur",hash.get("moverdrcur")); 
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	
	@SuppressWarnings({ "unchecked", "rawtypes" }) //이사변경
	@RequestMapping(value="/api/rdr/getRdr1043",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1043(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap(); 
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash =Util.changeToLowerMapKey( mapper.readValue(body, new TypeReference<HashMap>(){}));  
			hash.put("incmgpers",hash.get("loginid")) ; //추후 로그인 ID로 변경
			hash.put("cns_empcnfmid",hash.get("loginid")) ; //추후 로그인 ID로 변경 
			hash.put("cns_empcnfmflnm",hash.get("loginnm")) ; //추후 로그인 ID로 변경 
			hash.put("cns_empacpnid",hash.get("loginid")) ; //추후 로그인 ID로 변경 
			hash.put("cns_empacpnflnm",hash.get("loginnm")) ; //추후 로그인 ID로 변경  
			hash.put("movedt",hash.get("movedt2"));  //스트링날짜로 변경 - 날짜로 리퀘스트시 날짜가 23시간 이전 날짜로 변경되어 임시조치
			hash.put("dlvhopedt",hash.get("dlvhopedt2"));  //스트링날짜로 변경 - 날짜로 리퀘스트시 날짜가 23시간 이전 날짜로 변경되어 임시조치
			//hash.put("trsfbocnfmstat","10");   
			 
			/*if((boolean)hash.get("cns_empcnfmyn") == true) {
				hash.put("cns_empcnfmyn", "Y");
			}else {
				hash.put("cns_empcnfmyn", "N");
			}*/
			
			rdrSv.getRdr1043(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));  
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" }) //자동이체
	@RequestMapping(value="/api/rdr/getRdr1071",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1071(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			rdrSv.getRdr1071(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg")); 
			result.put("data",hash.get("rsltcur")); 
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" }) //휴독
	@RequestMapping(value="/api/rdr/getRdr1081",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1081(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			rdrSv.getRdr1081(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg")); 
			result.put("data",hash.get("moverdrcur")); 
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" }) //휴독변경
	@RequestMapping(value="/api/rdr/getRdr1083",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1083(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap(); 
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash =Util.changeToLowerMapKey( mapper.readValue(body, new TypeReference<HashMap>(){}));  
			hash.put("incmgpers",hash.get("loginid")) ; //추후 로그인 ID로 변경
			hash.put("cns_empcnfmid",hash.get("loginid")) ; //추후 로그인 ID로 변경 
			hash.put("cns_empcnfmflnm",hash.get("loginnm")) ; //추후 로그인 ID로 변경 
			hash.put("cns_empacpnid",hash.get("loginid")) ; //추후 로그인 ID로 변경 
			hash.put("cns_empacpnflnm",hash.get("loginnm")) ; //추후 로그인 ID로 변경  
			hash.put("susptodt",hash.get("susptodt2"));  //스트링날짜로 변경 - 날짜로 리퀘스트시 날짜가 23시간 이전 날짜로 변경되어 임시조치
			hash.put("suspfrdt",hash.get("suspfrdt2"));  //스트링날짜로 변경 - 날짜로 리퀘스트시 날짜가 23시간 이전 날짜로 변경되어 임시조치
			hash.put("dlvdt",hash.get("dlvdt2"));  //스트링날짜로 변경 - 날짜로 리퀘스트시 날짜가 23시간 이전 날짜로 변경되어 임시조치
			hash.put("qty",hash.get("qty").toString()); 
			if((boolean)hash.get("bocnfmyn") == true) {
				hash.put("bocnfmyn", "Y");
			}else {
				hash.put("bocnfmyn", "N");
			}
			if((boolean)hash.get("cns_empcnfmyn") == true) {
				hash.put("cns_empcnfmyn", "Y");
			}else {
				hash.put("cns_empcnfmyn", "N");
			}
			rdrSv.getRdr1083(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));  
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
 
	@SuppressWarnings({ "unchecked", "rawtypes" }) //휴독
	@RequestMapping(value="/api/rdr/getRdr1072",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1072(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			rdrSv.getRdr1072(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("rdr_no",hash.get("rdr_no"));
			result.put("medicd",hash.get("medicd"));
			result.put("rsltcur",hash.get("rsltcur"));
			result.put("commcdcur1",hash.get("commcdcur1"));
			result.put("telnocur",hash.get("telnocur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" }) //휴독
	@RequestMapping(value="/api/rdr/getRdr1073",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getRdr1073(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			rdrSv.getRdr1073(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("accflag",hash.get("accflag"));
			result.put("bocd",hash.get("bocd"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("pymtnm",hash.get("pymtnm"));
			result.put("pymttel1",hash.get("pymttel1"));
			result.put("pymttel2",hash.get("pymttel2"));
			result.put("pymttel3",hash.get("pymttel3"));
			result.put("bankcd",hash.get("bankcd"));
			result.put("acctno",hash.get("acctno"));
			result.put("prn",hash.get("prn"));
			result.put("aplcdt",hash.get("aplcdt"));
			result.put("aplyyymm",hash.get("aplyyymm"));
			result.put("email",hash.get("email"));
			result.put("rdr_no",hash.get("rdr_no"));
			result.put("medicd",hash.get("medicd"));
			result.put("tmpflag",hash.get("tmpflag"));
			result.put("aplcpathcd",hash.get("aplcpathcd"));
			result.put("arskey",hash.get("arskey"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}

}
