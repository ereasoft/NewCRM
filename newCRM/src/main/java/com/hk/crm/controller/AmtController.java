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
import com.hk.crm.service.AmtService;

import java.util.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.apache.tomcat.util.threads.TaskThread;
import com.hk.crm.config.Util;

@RestController
public class AmtController {
	private static final Log log = LogFactory.getLog(TaskThread.class); 
	//private static String hash.get("loginid")="tester";
	//private static String hash.get("loginnm")="�뀒�뒪�꽣"; 
 
	
	@Autowired
	private AmtService AmtSv;
	
	
	//지로EDI
	@SuppressWarnings({ "unchecked", "rawtypes" })  //작업내역 리스트
	@RequestMapping(value="/api/Amt/getAmt1001",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1001(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1001(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd")); 
			result.put("acqdt1",hash.get("acqdt1"));
			result.put("acqdt2",hash.get("acqdt2"));
			result.put("pageno",hash.get("pageno")); 
			result.put("pagesize",hash.get("pagesize"));  
			result.put("totalcnt",hash.get("totalcnt"));  
			result.put("curcommlist",hash.get("curcommlist"));  
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}

	
	@SuppressWarnings({ "unchecked", "rawtypes" })  //지로수납결과 리스트
	@RequestMapping(value="/api/Amt/getAmt1002",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1002(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1002(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd")); 
			result.put("acqdt",hash.get("acqdt"));
			result.put("acqno",hash.get("acqno"));
			result.put("pageno",hash.get("pageno")); 
			result.put("pagesize",hash.get("pagesize"));  
			result.put("totalcnt",hash.get("totalcnt"));  
			result.put("normcnt",hash.get("normcnt"));  
			result.put("errcnt",hash.get("errcnt"));  
			result.put("curcommlist",hash.get("curcommlist"));  
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  //지로수납결과내역 리스트
	@RequestMapping(value="/api/Amt/getAmt1003",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1003(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1003(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("acqdt",hash.get("acqdt")); 
			result.put("acqno",hash.get("acqno"));
			result.put("girono",hash.get("girono"));
			result.put("pageno",hash.get("pageno")); 
			result.put("pagesize",hash.get("pagesize"));  
			result.put("normcnt",hash.get("normcnt"));  
			result.put("errcnt",hash.get("errcnt"));  
			result.put("rjtcnt",hash.get("rjtcnt"));  
			result.put("totalcnt",hash.get("totalcnt"));  
			result.put("finccnt",hash.get("finccnt"));  
			result.put("rcpmcnt",hash.get("rcpmcnt"));  
			result.put("normamt",hash.get("normamt"));  
			result.put("erramt",hash.get("erramt"));  
			result.put("rjtamt",hash.get("rjtamt"));  
			result.put("totalamt",hash.get("totalamt"));  
			result.put("fincamt",hash.get("fincamt"));  
			result.put("rcpmamt",hash.get("rcpmamt"));  
			result.put("cntforpaging",hash.get("cntforpaging"));  
			result.put("curcommlist",hash.get("curcommlist"));  			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	@SuppressWarnings({ "unchecked", "rawtypes" })  //Reject목록 리스트
	@RequestMapping(value="/api/Amt/getAmt1004",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1004(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1004(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("acqdt",hash.get("acqdt")); 
			result.put("acqno",hash.get("acqno"));
			result.put("girono",hash.get("girono"));
			result.put("rsltcur",hash.get("rsltcur"));  			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	@SuppressWarnings({ "unchecked", "rawtypes" })  //Reject목록 보정실행
	@RequestMapping(value="/api/Amt/getAmt1005",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1005(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1005(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("acqdt",hash.get("acqdt")); 
			result.put("acqno",hash.get("acqno"));
			result.put("girono",hash.get("girono"));
			result.put("seq",hash.get("seq"));  		
			result.put("custbrwsno",hash.get("custbrwsno"));  		
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	@SuppressWarnings({ "unchecked", "rawtypes" })  //지로수납결과 수금반영처리
	@RequestMapping(value="/api/Amt/getAmt1006",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1006(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1006(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("accflag",hash.get("accflag"));
			result.put("acqdt",hash.get("acqdt")); 
			result.put("acqno",hash.get("acqno"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	

	 
	@SuppressWarnings({ "unchecked", "rawtypes" })  //지로 수납관리 저장
	@RequestMapping(value="/api/Amt/getAmt1007",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1007(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1007(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("acqdt",hash.get("acqdt")); 
			result.put("acqno",hash.get("acqno"));
			result.put("filenm",hash.get("filenm"));
			result.put("noit",hash.get("noit"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  //지로 수납관리 저장
	@RequestMapping(value="/api/Amt/getAmt1008",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1008(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1008(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("acqdt",hash.get("acqdt")); 
			result.put("acqno",hash.get("acqno"));
			result.put("girono",hash.get("girono"));
			result.put("normnoit",hash.get("normnoit"));
			result.put("normamt",hash.get("normamt"));
			result.put("rjnoit",hash.get("rjnoit"));
			result.put("rjamt",hash.get("rjamt"));
			result.put("itgrnoit",hash.get("itgrnoit"));
			result.put("itgramt",hash.get("itgramt"));
			result.put("rmsgdt",hash.get("rmsgdt"));
			result.put("girocoms",hash.get("girocoms"));
			result.put("rcpmrflendyn",hash.get("rcpmrflendyn"));
			result.put("rcpmrflnoit",hash.get("rcpmrflnoit"));
			result.put("seq",hash.get("seq"));
			result.put("recpdt",hash.get("recpdt"));
			result.put("recpbankcd",hash.get("recpbankcd"));
			result.put("recpbrchcd",hash.get("recpbrchcd"));
			result.put("custbrwsno",hash.get("custbrwsno"));
			result.put("amt",hash.get("amt"));
			result.put("recpclsf",hash.get("recpclsf"));
			result.put("tbstprocclsf",hash.get("tbstprocclsf"));
			result.put("shftdt",hash.get("shftdt"));
			result.put("girocoms_s",hash.get("girocoms_s"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	

	@SuppressWarnings({ "unchecked", "rawtypes" })  //지로 수납관리 이미 처리했나 확인
	@RequestMapping(value="/api/Amt/getAmt1009",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1009(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1009(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("acqdt",hash.get("acqdt")); 
			result.put("gryn",hash.get("gryn"));
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
		
	
	
	// 지로영수증 발행 - 일괄
	@SuppressWarnings({ "unchecked", "rawtypes" })  //지로 수납관리 이미 처리했나 확인
	@RequestMapping(value="/api/Amt/getAmt1700",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1700(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1700(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd")); 
			result.put("curryymm",hash.get("curryymm"));
			result.put("giroprt",hash.get("giroprt"));
			result.put("girono",hash.get("girono"));
			result.put("dstccdcur",hash.get("dstccdcur"));
			result.put("commcdcur1",hash.get("commcdcur1"));
			result.put("commcdcur2",hash.get("commcdcur2"));
			result.put("commcdcur3",hash.get("commcdcur3"));
			result.put("commcdcur4",hash.get("commcdcur4"));
			result.put("commcdcur5",hash.get("commcdcur5"));			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
			
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  //지로 수납관리 이미 처리했나 확인
	@RequestMapping(value="/api/Amt/getAmt1701",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1701(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1701(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd")); 
			result.put("curryymm",hash.get("curryymm"));
			result.put("giroprt",hash.get("giroprt"));
			result.put("dstccdcur",hash.get("dstccdcur"));
			result.put("medicdcur",hash.get("medicdcur"));
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  //지로 수납관리 이미 처리했나 확인
	@RequestMapping(value="/api/Amt/getAmt1702",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1702(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1702(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd")); 
			result.put("giroprt",hash.get("giroprt"));			
			result.put("vistprt",hash.get("vistprt"));
			result.put("rdrnm_catl",hash.get("rdrnm_catl"));
			result.put("setupval1",hash.get("setupval1"));
			result.put("setupval2",hash.get("setupval2"));
			result.put("setupval3",hash.get("setupval3"));
			result.put("setupval4",hash.get("setupval4"));
			result.put("setupval5",hash.get("setupval5"));
			result.put("setupval6",hash.get("setupval6"));
			result.put("setupval7",hash.get("setupval7"));
			result.put("setupval8",hash.get("setupval8"));
			result.put("setupval9",hash.get("setupval9"));
			result.put("setupval10",hash.get("setupval10"));
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
	@RequestMapping(value="/api/Amt/getAmt1703",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1703(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1703(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("f_subsmappli",hash.get("f_subsmappli"));
			result.put("t_subsmappli",hash.get("t_subsmappli"));
			result.put("valyn",hash.get("valyn"));
			result.put("prevalyn",hash.get("prevalyn"));
			result.put("prevalqty",hash.get("prevalqty"));
			result.put("freeclsf",hash.get("freeclsf"));
			result.put("dlvclsf",hash.get("dlvclsf"));
			result.put("clamtmthd",hash.get("clamtmthd"));
			result.put("qqyn",hash.get("qqyn"));
			result.put("medicd",hash.get("medicd"));
			result.put("mmintg",hash.get("mmintg"));
			result.put("girotype",hash.get("girotype"));
			result.put("etc1",hash.get("etc1"));
			result.put("etc2",hash.get("etc2"));
			result.put("dlvdstccd",hash.get("dlvdstccd"));
			result.put("f_dlvno",hash.get("f_dlvno"));
			result.put("t_dlvno",hash.get("t_dlvno"));
			result.put("ext1",hash.get("ext1"));
			result.put("ext2",hash.get("ext2"));
			result.put("ext3",hash.get("ext3"));
			result.put("bonm",hash.get("bonm"));
			result.put("botel",hash.get("botel"));
			result.put("girono",hash.get("girono"));
			result.put("aprvno",hash.get("aprvno"));
			result.put("msg",hash.get("msg"));
			result.put("msg2",hash.get("msg2"));
			result.put("ext1",hash.get("ext1"));
			result.put("ext2",hash.get("ext2"));
			result.put("ext3",hash.get("ext3"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1703_GIROA4X3",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1703_GIROA4X3(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1703_GIROA4X3(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("f_subsmappli",hash.get("f_subsmappli"));
			result.put("t_subsmappli",hash.get("t_subsmappli"));
			result.put("valyn",hash.get("valyn"));
			result.put("prevalyn",hash.get("prevalyn"));
			result.put("prevalqty",hash.get("prevalqty"));
			result.put("freeclsf",hash.get("freeclsf"));
			result.put("dlvclsf",hash.get("dlvclsf"));
			result.put("clamtmthd",hash.get("clamtmthd"));
			result.put("qqyn",hash.get("qqyn"));
			result.put("medicd",hash.get("medicd"));
			result.put("mmintg",hash.get("mmintg"));
			result.put("girotype",hash.get("girotype"));
			result.put("etc1",hash.get("etc1"));
			result.put("etc2",hash.get("etc2"));
			result.put("dlvdstccd",hash.get("dlvdstccd"));
			result.put("f_dlvno",hash.get("f_dlvno"));
			result.put("t_dlvno",hash.get("t_dlvno"));
			result.put("ext1",hash.get("ext1"));
			result.put("ext2",hash.get("ext2"));
			result.put("ext3",hash.get("ext3"));
			result.put("bonm",hash.get("bonm"));
			result.put("botel",hash.get("botel"));
			result.put("girono",hash.get("girono"));
			result.put("aprvno",hash.get("aprvno"));
			result.put("msg",hash.get("msg"));
			result.put("msg2",hash.get("msg2"));
			result.put("ext1",hash.get("ext1"));
			result.put("ext2",hash.get("ext2"));
			result.put("ext3",hash.get("ext3"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1704",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1704(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1704(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("dstccdcur",hash.get("dstccdcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1705",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1705(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1705(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("basidt",hash.get("basidt"));
			result.put("bonm",hash.get("bonm"));
			result.put("botel",hash.get("botel"));
			result.put("girono",hash.get("girono"));
			result.put("aprvno",hash.get("aprvno"));
			result.put("filenm",hash.get("filenm"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2000",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2000(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2000(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("curryymm",hash.get("curryymm"));
			result.put("girono",hash.get("girono"));
			result.put("giroprt",hash.get("giroprt"));
			result.put("giromargin",hash.get("giromargin"));
			result.put("vistmargin",hash.get("vistmargin"));
			result.put("msgcur1",hash.get("msgcur1"));
			result.put("msgcur2",hash.get("msgcur2"));
			result.put("msgcur3",hash.get("msgcur3"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2001",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2001(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2001(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("search_gb",hash.get("search_gb"));
			result.put("search_word",hash.get("search_word"));
			result.put("curryymm",hash.get("curryymm"));
			result.put("rdr_no",hash.get("rdr_no"));
			result.put("rdrnm",hash.get("rdrnm"));
			result.put("remk",hash.get("remk"));
			result.put("dlvaddr",hash.get("dlvaddr"));
			result.put("rdrtel_no",hash.get("rdrtel_no"));
			result.put("medikindcur",hash.get("medikindcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2002",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2002(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2002(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("rdr_no",hash.get("rdr_no"));
			result.put("medicd",hash.get("medicd"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2003",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2003(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2003(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("rdr_no",hash.get("rdr_no"));
			result.put("medicd",hash.get("medicd"));
			result.put("f_subsmappli",hash.get("f_subsmappli"));
			result.put("t_subsmappli",hash.get("t_subsmappli"));
			result.put("mmintg",hash.get("mmintg"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2004",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2004(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2004(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("sessionid",hash.get("sessionid"));
			result.put("rdr_no",hash.get("rdr_no"));
			result.put("clamamt",hash.get("clamamt"));
			result.put("f_subsmappli",hash.get("f_subsmappli"));
			result.put("t_subsmappli",hash.get("t_subsmappli"));
			result.put("dlvqty",hash.get("dlvqty"));
			result.put("medicd",hash.get("medicd"));
			result.put("etc1",hash.get("etc1"));
			result.put("etc2",hash.get("etc2"));
			result.put("ext1",hash.get("ext1"));
			result.put("ext2",hash.get("ext2"));
			result.put("ext3",hash.get("ext3"));
			result.put("bonm",hash.get("bonm"));
			result.put("botel",hash.get("botel"));
			result.put("girono",hash.get("girono"));
			result.put("aprvno",hash.get("aprvno"));
			result.put("msg",hash.get("msg"));
			result.put("msg2",hash.get("msg2"));
			result.put("sessionid",hash.get("sessionid"));
			result.put("ext1",hash.get("ext1"));
			result.put("ext2",hash.get("ext2"));
			result.put("ext3",hash.get("ext3"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2005",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2005(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2005(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("sessionid",hash.get("sessionid"));
			result.put("rdr_no",hash.get("rdr_no"));
			result.put("clamamt",hash.get("clamamt"));
			result.put("f_subsmappli",hash.get("f_subsmappli"));
			result.put("t_subsmappli",hash.get("t_subsmappli"));
			result.put("dlvqty",hash.get("dlvqty"));
			result.put("medicd",hash.get("medicd"));
			result.put("rptvextndt",hash.get("rptvextndt"));
			result.put("rptvvalmm",hash.get("rptvvalmm"));
			result.put("rptvextnpers",hash.get("rptvextnpers"));
			result.put("etc1",hash.get("etc1"));
			result.put("ext1",hash.get("ext1"));
			result.put("ext2",hash.get("ext2"));
			result.put("ext3",hash.get("ext3"));
			result.put("bonm",hash.get("bonm"));
			result.put("botel",hash.get("botel"));
			result.put("msg",hash.get("msg"));
			result.put("sessionid",hash.get("sessionid"));
			result.put("ext1",hash.get("ext1"));
			result.put("ext2",hash.get("ext2"));
			result.put("ext3",hash.get("ext3"));
			result.put("curryy",hash.get("curryy"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	// 자동이체 - 신청관리	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1300",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1300(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1300(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
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

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1301",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1301(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1301(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("fr_aplcdt",hash.get("fr_aplcdt"));
			result.put("to_aplcdt",hash.get("to_aplcdt"));
			result.put("bocd",hash.get("bocd"));
			result.put("shftclsf",hash.get("shftclsf"));
			result.put("bocd_txt",hash.get("bocd_txt"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("aplcprocstat",hash.get("aplcprocstat"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("aplccnt",hash.get("aplccnt"));
			result.put("aplccnt10",hash.get("aplccnt10"));
			result.put("aplccnt20",hash.get("aplccnt20"));
			result.put("aplccnt30",hash.get("aplccnt30"));
			result.put("aplccnt40",hash.get("aplccnt40"));
			result.put("aplccnt50",hash.get("aplccnt50"));
			result.put("aplccnt60",hash.get("aplccnt60"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1302",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1302(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1302(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("aplcdt",hash.get("aplcdt"));
			result.put("aplcclsf",hash.get("aplcclsf"));
			result.put("aplcprocstat",hash.get("aplcprocstat"));
			result.put("sechcond",hash.get("sechcond"));
			result.put("sechcont",hash.get("sechcont"));
			result.put("fr_aplcdt",hash.get("fr_aplcdt"));
			result.put("to_aplcdt",hash.get("to_aplcdt"));
			result.put("shftclsf",hash.get("shftclsf"));
			result.put("uncnfmcnt",hash.get("uncnfmcnt"));
			result.put("cnfmcnt",hash.get("cnfmcnt"));
			result.put("canccnt",hash.get("canccnt"));
			result.put("aprverrcnt",hash.get("aprverrcnt"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1303",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1303(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1303(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("aplcdt",hash.get("aplcdt"));
			result.put("aplcno",hash.get("aplcno"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1304",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1304(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1304(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("rdr_no",hash.get("rdr_no"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1305",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1305(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1305(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("aplcno",hash.get("aplcno"));
			result.put("aplcdt",hash.get("aplcdt"));
			result.put("pymtstrtdt",hash.get("pymtstrtdt"));
			result.put("rdr_no",hash.get("rdr_no"));
			result.put("medicd",hash.get("medicd"));
			result.put("closyn",hash.get("closyn"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1306",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1306(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1306(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("aplcyn",hash.get("aplcyn"));
			result.put("aplcdt",hash.get("aplcdt"));
			result.put("aplcno",hash.get("aplcno"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1307",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1307(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1307(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("aplcdt",hash.get("aplcdt"));
			result.put("aplcno",hash.get("aplcno"));
			result.put("zip1",hash.get("zip1"));
			result.put("zip2",hash.get("zip2"));
			result.put("zip3",hash.get("zip3"));
			result.put("dlvaddr",hash.get("dlvaddr"));
			result.put("dlvaddrdtls",hash.get("dlvaddrdtls"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	//자동이체 - 신청작업관리
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1400",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1400(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1400(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("commcdcur1",hash.get("commcdcur1"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1401",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1401(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1401(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("workclsf",hash.get("workclsf"));
			result.put("trsmdt1",hash.get("trsmdt1"));
			result.put("trsmdt2",hash.get("trsmdt2"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("curcommlist",hash.get("curcommlist"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1402",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1402(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1402(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("trsmdt",hash.get("trsmdt"));
			result.put("workclsf",hash.get("workclsf"));
			result.put("trsmno",hash.get("trsmno"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1403",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1403(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1403(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("filenm",hash.get("filenm"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1405",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1405(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1405(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("filenm",hash.get("filenm"));
			result.put("insttcd",hash.get("insttcd"));
			result.put("totnoit",hash.get("totnoit"));
			result.put("noit1",hash.get("noit1"));
			result.put("noit2",hash.get("noit2"));
			result.put("noit3",hash.get("noit3"));
			result.put("noit4",hash.get("noit4"));
			result.put("aplcacpndt",hash.get("aplcacpndt"));
			result.put("seq",hash.get("seq"));
			result.put("aplcdt",hash.get("aplcdt"));
			result.put("shftaplcclsf",hash.get("shftaplcclsf"));
			result.put("pymtno_2",hash.get("pymtno_2"));
			result.put("recpinstt",hash.get("recpinstt"));
			result.put("acctno",hash.get("acctno"));
			result.put("prn",hash.get("prn"));
			result.put("acpnpointcd",hash.get("acpnpointcd"));
			result.put("feekind",hash.get("feekind"));
			result.put("ocomcd",hash.get("ocomcd"));
			result.put("ocomresn",hash.get("ocomresn"));
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
	@RequestMapping(value="/api/Amt/getAmt1408",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1408(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1408(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("filenm",hash.get("filenm"));
			result.put("insttcd",hash.get("insttcd"));
			result.put("totnoit",hash.get("totnoit"));
			result.put("noit1",hash.get("noit1"));
			result.put("noit2",hash.get("noit2"));
			result.put("noit3",hash.get("noit3"));
			result.put("noit4",hash.get("noit4"));
			result.put("aplcacpndt",hash.get("aplcacpndt"));
			result.put("seq",hash.get("seq"));
			result.put("aplcdt",hash.get("aplcdt"));
			result.put("shftaplcclsf",hash.get("shftaplcclsf"));
			result.put("pymtno_2",hash.get("pymtno_2"));
			result.put("recpinstt",hash.get("recpinstt"));
			result.put("acctno",hash.get("acctno"));
			result.put("prn",hash.get("prn"));
			result.put("acpnpointcd",hash.get("acpnpointcd"));
			result.put("feekind",hash.get("feekind"));
			result.put("ocomcd",hash.get("ocomcd"));
			result.put("ocomresn",hash.get("ocomresn"));
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
	@RequestMapping(value="/api/Amt/getAmt1409",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1409(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1409(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("filenm",hash.get("filenm"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1410",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1410(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1410(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("trsmdt",hash.get("trsmdt"));
			result.put("shftclsf",hash.get("shftclsf"));
			result.put("workclsf",hash.get("workclsf"));
			result.put("trsmno",hash.get("trsmno"));
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
	@RequestMapping(value="/api/Amt/getAmt1411",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1411(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1411(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("trsmdt",hash.get("trsmdt"));
			result.put("shftclsf",hash.get("shftclsf"));
			result.put("workclsf",hash.get("workclsf"));
			result.put("trsmno",hash.get("trsmno"));
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
	@RequestMapping(value="/api/Amt/getAmt1412",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1412(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1412(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("trsmdt",hash.get("trsmdt"));
			result.put("shftclsf",hash.get("shftclsf"));
			result.put("workclsf",hash.get("workclsf"));
			result.put("trsmno",hash.get("trsmno"));
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
	@RequestMapping(value="/api/Amt/getAmt1413",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1413(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1413(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("trsmdt",hash.get("trsmdt"));
			result.put("shftclsf",hash.get("shftclsf"));
			result.put("workclsf",hash.get("workclsf"));
			result.put("trsmno",hash.get("trsmno"));
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
	@RequestMapping(value="/api/Amt/getAmt1433",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1433(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1433(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("filenm",hash.get("filenm"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}

	//자동이체 - 자동이체 승인오류 관리
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt3000",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt3000(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt3000(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt3001",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt3001(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt3001(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("bocd_txt",hash.get("bocd_txt"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("aplcdt",hash.get("aplcdt"));
			result.put("aplcclsf",hash.get("aplcclsf"));
			result.put("sechcond",hash.get("sechcond"));
			result.put("sechcont",hash.get("sechcont"));
			result.put("fr_aplcdt",hash.get("fr_aplcdt"));
			result.put("to_aplcdt",hash.get("to_aplcdt"));
			result.put("shftclsf",hash.get("shftclsf"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt3002",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt3002(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt3002(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("aplcdt",hash.get("aplcdt"));
			result.put("aplcno",hash.get("aplcno"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt3004",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt3004(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt3004(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("rdr_no",hash.get("rdr_no"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	

	//자동이체 - 현황조회
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1501",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1501(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1501(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("rp_clsf",hash.get("rp_clsf"));
			result.put("fr_dt",hash.get("fr_dt"));
			result.put("to_dt",hash.get("to_dt"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("b_cnt",hash.get("b_cnt"));
			result.put("c_cnt",hash.get("c_cnt"));
			result.put("d_cnt",hash.get("d_cnt"));
			result.put("e_cnt",hash.get("e_cnt"));
			result.put("g_cnt",hash.get("g_cnt"));
			result.put("tot_cnt",hash.get("tot_cnt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	//자동이체 - 청구관리
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1601",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1601(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1601(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1602",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1602(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1602(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("bocd",hash.get("bocd"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("totalcnt1",hash.get("totalcnt1"));
			result.put("totalcnt2",hash.get("totalcnt2"));
			result.put("totalcnt3",hash.get("totalcnt3"));
			result.put("totalcnt4",hash.get("totalcnt4"));
			result.put("totalcnt5",hash.get("totalcnt5"));
			result.put("totalcnt6",hash.get("totalcnt6"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1603",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1603(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1603(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("basidt",hash.get("basidt"));
			result.put("shftclsfcd",hash.get("shftclsfcd"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1604",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1604(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1604(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("shftclsfcd",hash.get("shftclsfcd"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("filenm",hash.get("filenm"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1606",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1606(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1606(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("shftclsfcd",hash.get("shftclsfcd"));
			result.put("filenm",hash.get("filenm"));
			result.put("insttcd",hash.get("insttcd"));
			result.put("pymtdt",hash.get("pymtdt"));
			result.put("totpayoicapnoit",hash.get("totpayoicapnoit"));
			result.put("totpayoicapamt",hash.get("totpayoicapamt"));
			result.put("prtnpayoicapnoit",hash.get("prtnpayoicapnoit"));
			result.put("prtnpayoicapamt",hash.get("prtnpayoicapamt"));
			result.put("centrverierrnoit",hash.get("centrverierrnoit"));
			result.put("payobankcoms",hash.get("payobankcoms"));
			result.put("rcpmbankcoms",hash.get("rcpmbankcoms"));
			result.put("seq",hash.get("seq"));
			result.put("pymtno",hash.get("pymtno"));
			result.put("payoyn",hash.get("payoyn"));
			result.put("recpocomcd",hash.get("recpocomcd"));
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
	@RequestMapping(value="/api/Amt/getAmt1607",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1607(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1607(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("accflag",hash.get("accflag"));
			result.put("basidt",hash.get("basidt"));
			result.put("shftclsfcd",hash.get("shftclsfcd"));
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
	@RequestMapping(value="/api/Amt/getAmt1608",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1608(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1608(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("shftclsfcd",hash.get("shftclsfcd"));
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
	@RequestMapping(value="/api/Amt/getAmt1609",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1609(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1609(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("shftclsfcd",hash.get("shftclsfcd"));
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
	@RequestMapping(value="/api/Amt/getAmt1610",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1610(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1610(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("shftclsfcd",hash.get("shftclsfcd"));
			result.put("incmgpers",hash.get("incmgpers"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}

	//자동이체 - 청구결과
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getSSAmt1701",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getSSAmt1701(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getSSAmt1701(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("bocd",hash.get("bocd"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("totalcnt2",hash.get("totalcnt2"));
			result.put("totalcnt3",hash.get("totalcnt3"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getSSAmt1702",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getSSAmt1702(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getSSAmt1702(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("sechcond",hash.get("sechcond"));
			result.put("sechcont",hash.get("sechcont"));
			result.put("basidt",hash.get("basidt"));
			result.put("erryn",hash.get("erryn"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("normcnt",hash.get("normcnt"));
			result.put("errcnt",hash.get("errcnt"));
			result.put("totalamt",hash.get("totalamt"));
			result.put("normamt",hash.get("normamt"));
			result.put("erramt",hash.get("erramt"));
			result.put("comsamt",hash.get("comsamt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	//자동이체 - 납부자관리
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1800",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1800(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1800(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("telnocur",hash.get("telnocur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1801",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1801(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1801(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("sechcond",hash.get("sechcond"));
			result.put("sechcont",hash.get("sechcont"));
			result.put("bocd",hash.get("bocd"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1802",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1802(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1802(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("pymtseq",hash.get("pymtseq"));
			result.put("cnfm",hash.get("cnfm"));
			result.put("rsltcur",hash.get("rsltcur"));
			result.put("cntrcur",hash.get("cntrcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1803",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1803(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1803(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("accflag",hash.get("accflag"));
			result.put("uptflag",hash.get("uptflag"));
			result.put("pymtseq",hash.get("pymtseq"));
			result.put("shftclsf",hash.get("shftclsf"));
			result.put("prn",hash.get("prn"));
			result.put("pymtnm",hash.get("pymtnm"));
			result.put("email",hash.get("email"));
			result.put("tel1",hash.get("tel1"));
			result.put("tel2",hash.get("tel2"));
			result.put("tel3",hash.get("tel3"));
			result.put("zip1",hash.get("zip1"));
			result.put("zip2",hash.get("zip2"));
			result.put("zip3",hash.get("zip3"));
			result.put("addr",hash.get("addr"));
			result.put("addrdtls",hash.get("addrdtls"));
			result.put("bankcd",hash.get("bankcd"));
			result.put("acctno",hash.get("acctno"));
			result.put("cardcmpycd",hash.get("cardcmpycd"));
			result.put("cardno",hash.get("cardno"));
			result.put("vdtyprd",hash.get("vdtyprd"));
			result.put("aplcpathcd",hash.get("aplcpathcd"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1804",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1804(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1804(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("rdr_no",hash.get("rdr_no"));
			result.put("medicd",hash.get("medicd"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1805",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1805(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1805(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("rdr_no",hash.get("rdr_no"));
			result.put("medicd",hash.get("medicd"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("normcnt",hash.get("normcnt"));
			result.put("errcnt",hash.get("errcnt"));
			result.put("totalamt",hash.get("totalamt"));
			result.put("normamt",hash.get("normamt"));
			result.put("erramt",hash.get("erramt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1806",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1806(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1806(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("selgb",hash.get("selgb"));
			result.put("rdr_no",hash.get("rdr_no"));
			result.put("medicd",hash.get("medicd"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("uncnfmcnt",hash.get("uncnfmcnt"));
			result.put("cnfmcnt",hash.get("cnfmcnt"));
			result.put("canccnt",hash.get("canccnt"));
			result.put("aprverrcnt",hash.get("aprverrcnt"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1807",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1807(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1807(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("pymtseq",hash.get("pymtseq"));
			result.put("pymtseq",hash.get("pymtseq"));
			result.put("shftclsf",hash.get("shftclsf"));
			result.put("prn",hash.get("prn"));
			result.put("pymtnm",hash.get("pymtnm"));
			result.put("email",hash.get("email"));
			result.put("tel1",hash.get("tel1"));
			result.put("tel2",hash.get("tel2"));
			result.put("tel3",hash.get("tel3"));
			result.put("ptph_no1",hash.get("ptph_no1"));
			result.put("ptph_no2",hash.get("ptph_no2"));
			result.put("ptph_no3",hash.get("ptph_no3"));
			result.put("zip1",hash.get("zip1"));
			result.put("zip2",hash.get("zip2"));
			result.put("zip3",hash.get("zip3"));
			result.put("addr",hash.get("addr"));
			result.put("addrdtls",hash.get("addrdtls"));
			result.put("bankcd",hash.get("bankcd"));
			result.put("banknm",hash.get("banknm"));
			result.put("acctno",hash.get("acctno"));
			result.put("rdrnm",hash.get("rdrnm"));
			result.put("pymtno",hash.get("pymtno"));
			result.put("aplcdt",hash.get("aplcdt"));
			result.put("bocd",hash.get("bocd"));
			result.put("bonm",hash.get("bonm"));
			result.put("shftbgnyymm",hash.get("shftbgnyymm"));
			result.put("rdrtel_no1",hash.get("rdrtel_no1"));
			result.put("rdrtel_no2",hash.get("rdrtel_no2"));
			result.put("rdrtel_no3",hash.get("rdrtel_no3"));
			result.put("shftclsfnm",hash.get("shftclsfnm"));
			result.put("arskey",hash.get("arskey"));
			result.put("telnocur",hash.get("telnocur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1808",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1808(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1808(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("rdr_no",hash.get("rdr_no"));
			result.put("medicd",hash.get("medicd"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1809",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1809(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1809(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("pymtseq",hash.get("pymtseq"));
			result.put("aplyyymm",hash.get("aplyyymm"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1810",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1810(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1810(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("pymtseq",hash.get("pymtseq"));
			result.put("cptelegramkey",hash.get("cptelegramkey"));
			result.put("ptph_no1",hash.get("ptph_no1"));
			result.put("ptph_no2",hash.get("ptph_no2"));
			result.put("ptph_no3",hash.get("ptph_no3"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1811",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1811(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1811(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("cptelegramkey",hash.get("cptelegramkey"));
			result.put("resultyn",hash.get("resultyn"));
			result.put("resultcode",hash.get("resultcode"));
			result.put("recordfilename",hash.get("recordfilename"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt1813",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt1813(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt1813(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("pymtseq",hash.get("pymtseq"));
			result.put("acctno",hash.get("acctno"));
			result.put("bankcd",hash.get("bankcd"));
			result.put("imgfilename",hash.get("imgfilename"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	//휴대폰 자동이체	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2701",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2701(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2701(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2702",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2702(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2702(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("bocd",hash.get("bocd"));
			result.put("search_nm",hash.get("search_nm"));
			result.put("search_pttn",hash.get("search_pttn"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2705",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2705(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2705(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("tid_input",hash.get("tid_input"));
			result.put("accflag",hash.get("accflag"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2707",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2707(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2707(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("accflag",hash.get("accflag"));
			result.put("basidt",hash.get("basidt"));
			result.put("shftclsfcd",hash.get("shftclsfcd"));
			result.put("clamno",hash.get("clamno"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("tid_input",hash.get("tid_input"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	//카드 자동이체 - 카드청구(기존)
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2801",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2801(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2801(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2802",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2802(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2802(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("bocd",hash.get("bocd"));
			result.put("search_nm",hash.get("search_nm"));
			result.put("search_pttn",hash.get("search_pttn"));
			result.put("chksend",hash.get("chksend"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2805",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2805(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2805(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("tid_input",hash.get("tid_input"));
			result.put("accflag",hash.get("accflag"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2807",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2807(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2807(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("accflag",hash.get("accflag"));
			result.put("basidt",hash.get("basidt"));
			result.put("shftclsfcd",hash.get("shftclsfcd"));
			result.put("clamno",hash.get("clamno"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("tid_input",hash.get("tid_input"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		

	//카드 자동이체 - 카드청구(신규)
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt4301",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt4301(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt4301(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt4302",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt4302(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt4302(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("bocd",hash.get("bocd"));
			result.put("search_nm",hash.get("search_nm"));
			result.put("search_pttn",hash.get("search_pttn"));
			result.put("chksend",hash.get("chksend"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt4307",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt4307(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt4307(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("accflag",hash.get("accflag"));
			result.put("basidt",hash.get("basidt"));
			result.put("shftclsfcd",hash.get("shftclsfcd"));
			result.put("clamno",hash.get("clamno"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("apresultcd",hash.get("apresultcd"));
			result.put("apresultmsg",hash.get("apresultmsg"));
			result.put("apmobilid",hash.get("apmobilid"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}		
	
	//독자환불처리
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt3201",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt3201(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt3201(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("frdt",hash.get("frdt"));
			result.put("todt",hash.get("todt"));
			result.put("bocd",hash.get("bocd"));
			result.put("rdrnm",hash.get("rdrnm"));
			result.put("search_pttn",hash.get("search_pttn"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}			
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt3205",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt3205(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt3205(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("clamno",hash.get("clamno"));
			result.put("rdr_no",hash.get("rdr_no"));
			result.put("bgnsubsmappli",hash.get("bgnsubsmappli"));
			result.put("incmgpers",hash.get("incmgpers"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}			
	
	//지국이체 - 지국송금이체	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2601",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2601(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2601(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("clamtmthdcd",hash.get("clamtmthdcd"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2602",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2602(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2602(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("bocd",hash.get("bocd"));
			result.put("bocd_txt",hash.get("bocd_txt"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2603",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2603(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2603(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("basidt",hash.get("basidt"));
			result.put("clamtmthdcd",hash.get("clamtmthdcd"));
			result.put("recpfrdt",hash.get("recpfrdt"));
			result.put("recptodt",hash.get("recptodt"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2604",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2604(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2604(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("clamtmthdcd",hash.get("clamtmthdcd"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("filenm",hash.get("filenm"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2606",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2606(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2606(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("clamtmthdcd",hash.get("clamtmthdcd"));
			result.put("filenm",hash.get("filenm"));
			result.put("insttcd",hash.get("insttcd"));
			result.put("rcpmdt",hash.get("rcpmdt"));
			result.put("payicapnoit",hash.get("payicapnoit"));
			result.put("payicapamt",hash.get("payicapamt"));
			result.put("centrverierrnoit",hash.get("centrverierrnoit"));
			result.put("payobankcoms",hash.get("payobankcoms"));
			result.put("rcpmbankcoms",hash.get("rcpmbankcoms"));
			result.put("payno",hash.get("payno"));
			result.put("payyn",hash.get("payyn"));
			result.put("payocomcd",hash.get("payocomcd"));
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
	@RequestMapping(value="/api/Amt/getAmt2608",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2608(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2608(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("clamtmthdcd",hash.get("clamtmthdcd"));
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
	@RequestMapping(value="/api/Amt/getAmt2610",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2610(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2610(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("basidt",hash.get("basidt"));
			result.put("basidt2",hash.get("basidt2"));
			result.put("clamtmthdcd",hash.get("clamtmthdcd"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt26111",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2611(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2611(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	

	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Amt/getAmt2612",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getAmt2612(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			AmtSv.getAmt2612(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("basidt",hash.get("basidt"));
			result.put("rsltcur",hash.get("rsltcur"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	


	
	
}
