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
import com.hk.crm.service.InfService;

import java.util.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.apache.tomcat.util.threads.TaskThread;
import com.hk.crm.config.Util;

@RestController
public class InfController {
	private static final Log log = LogFactory.getLog(TaskThread.class); 
	//private static String hash.get("loginid")="tester";
	//private static String hash.get("loginnm")="�뀒�뒪�꽣"; 
 
	
	@Autowired
	private InfService InfSv;
	
	
	//지국정보
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Inf/getInf1001",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getInf1001(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			InfSv.getInf1001(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("deptcd",hash.get("deptcd"));
			result.put("bocd",hash.get("bocd"));
			result.put("bocd_txt",hash.get("bocd_txt"));
			result.put("bo_headnm",hash.get("bo_headnm"));
			result.put("cntrstatcd",hash.get("cntrstatcd"));
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
	@RequestMapping(value="/api/Inf/getInf1002",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getInf1002(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			InfSv.getInf1002(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("boseq",hash.get("boseq"));
			result.put("prn",hash.get("prn"));
			result.put("bonm",hash.get("bonm"));
			result.put("deptcd",hash.get("deptcd"));
			result.put("areacd",hash.get("areacd"));
			result.put("dmangyn",hash.get("dmangyn"));
			result.put("boclsf",hash.get("boclsf"));
			result.put("tel_no1",hash.get("tel_no1"));
			result.put("tel_no2",hash.get("tel_no2"));
			result.put("tel_no3",hash.get("tel_no3"));
			result.put("ptph_no1",hash.get("ptph_no1"));
			result.put("ptph_no2",hash.get("ptph_no2"));
			result.put("ptph_no3",hash.get("ptph_no3"));
			result.put("zip11",hash.get("zip11"));
			result.put("zip12",hash.get("zip12"));
			result.put("zip13",hash.get("zip13"));
			result.put("addr1",hash.get("addr1"));
			result.put("dtlsaddr1",hash.get("dtlsaddr1"));
			result.put("bo_headnm",hash.get("bo_headnm"));
			result.put("prn",hash.get("prn"));
			result.put("cntrdt",hash.get("cntrdt"));
			result.put("cntrexpydt",hash.get("cntrexpydt"));
			result.put("cntrstatcd",hash.get("cntrstatcd"));
			result.put("ernno",hash.get("ernno"));
			result.put("firmnm",hash.get("firmnm"));
			result.put("presinm",hash.get("presinm"));
			result.put("bizcond",hash.get("bizcond"));
			result.put("item",hash.get("item"));
			result.put("zip21",hash.get("zip21"));
			result.put("zip22",hash.get("zip22"));
			result.put("zip23",hash.get("zip23"));
			result.put("addr2",hash.get("addr2"));
			result.put("dtlsaddr2",hash.get("dtlsaddr2"));
			result.put("bo_prn",hash.get("bo_prn"));
			result.put("bo_flnm",hash.get("bo_flnm"));
			result.put("bo_tel_no1",hash.get("bo_tel_no1"));
			result.put("bo_tel_no2",hash.get("bo_tel_no2"));
			result.put("bo_tel_no3",hash.get("bo_tel_no3"));
			result.put("bo_ptph_no1",hash.get("bo_ptph_no1"));
			result.put("bo_ptph_no2",hash.get("bo_ptph_no2"));
			result.put("bo_ptph_no3",hash.get("bo_ptph_no3"));
			result.put("bo_zip1",hash.get("bo_zip1"));
			result.put("bo_zip2",hash.get("bo_zip2"));
			result.put("bo_zip3",hash.get("bo_zip3"));
			result.put("bo_addr",hash.get("bo_addr"));
			result.put("bo_dtlsaddr",hash.get("bo_dtlsaddr"));
			result.put("deps_persnm",hash.get("deps_persnm"));
			result.put("bankcd",hash.get("bankcd"));
			result.put("acctno",hash.get("acctno"));
			result.put("deps_persnm_a",hash.get("deps_persnm_a"));
			result.put("bankcd_a",hash.get("bankcd_a"));
			result.put("acctno_a",hash.get("acctno_a"));
			result.put("smsnum1",hash.get("smsnum1"));
			result.put("jide_sms",hash.get("jide_sms"));
			result.put("apttothoscnt",hash.get("apttothoscnt"));
			result.put("houstothoscnt",hash.get("houstothoscnt"));
			result.put("shoptothoscnt",hash.get("shoptothoscnt"));
			result.put("offi_roomtothoscnt",hash.get("offi_roomtothoscnt"));
			result.put("addbusiinfo",hash.get("addbusiinfo"));
			result.put("gurtamt",hash.get("gurtamt"));
			result.put("agrmntdt",hash.get("agrmntdt"));
			result.put("sendcd",hash.get("sendcd"));
			result.put("remk",hash.get("remk"));
			result.put("sum1",hash.get("sum1"));
			result.put("sum2",hash.get("sum2"));
			result.put("sum3",hash.get("sum3"));
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
	@RequestMapping(value="/api/Inf/getInf1003",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getInf1003(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			InfSv.getInf1003(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("boseq",hash.get("boseq"));
			result.put("selluprccd",hash.get("selluprccd"));
			result.put("areauprccd",hash.get("areauprccd"));
			result.put("dlvwoncostcd",hash.get("dlvwoncostcd"));
			result.put("stetselluprccd",hash.get("stetselluprccd"));
			result.put("prtfacty",hash.get("prtfacty"));
			result.put("prtecnt",hash.get("prtecnt"));
			result.put("girotype",hash.get("girotype"));
			result.put("girono",hash.get("girono"));
			result.put("aprvno",hash.get("aprvno"));
			result.put("fisccmpymangcd",hash.get("fisccmpymangcd"));
			result.put("empextnvalswityn",hash.get("empextnvalswityn"));
			result.put("promextnvalswityn",hash.get("promextnvalswityn"));
			result.put("extncampvalswityn",hash.get("extncampvalswityn"));
			result.put("chrgcd",hash.get("chrgcd"));
			result.put("chrgpersnm",hash.get("chrgpersnm"));
			result.put("oprenvclsfcd",hash.get("oprenvclsfcd"));
			result.put("sysuseyn",hash.get("sysuseyn"));
			result.put("migryn",hash.get("migryn"));
			result.put("oabocd",hash.get("oabocd"));
			result.put("fisccmpyprocyn",hash.get("fisccmpyprocyn"));
			result.put("atmyn",hash.get("atmyn"));
			result.put("costlist",hash.get("costlist"));
			result.put("cdlist",hash.get("cdlist"));
			result.put("chrglist",hash.get("chrglist"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Inf/getInf1010",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getInf1010(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			InfSv.getInf1010(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("mode",hash.get("mode"));
			result.put("bocd",hash.get("bocd"));
			result.put("boseq",hash.get("boseq"));
			result.put("bonm",hash.get("bonm"));
			result.put("deptcd",hash.get("deptcd"));
			result.put("areacd",hash.get("areacd"));
			result.put("dmangyn",hash.get("dmangyn"));
			result.put("boclsf",hash.get("boclsf"));
			result.put("tel_no1",hash.get("tel_no1"));
			result.put("tel_no2",hash.get("tel_no2"));
			result.put("tel_no3",hash.get("tel_no3"));
			result.put("ptph_no1",hash.get("ptph_no1"));
			result.put("ptph_no2",hash.get("ptph_no2"));
			result.put("ptph_no3",hash.get("ptph_no3"));
			result.put("zip11",hash.get("zip11"));
			result.put("zip12",hash.get("zip12"));
			result.put("zip13",hash.get("zip13"));
			result.put("addr1",hash.get("addr1"));
			result.put("dtlsaddr1",hash.get("dtlsaddr1"));
			result.put("bo_headnm",hash.get("bo_headnm"));
			result.put("prn",hash.get("prn"));
			result.put("cntrdt",hash.get("cntrdt"));
			result.put("cntrexpydt",hash.get("cntrexpydt"));
			result.put("cntrstatcd",hash.get("cntrstatcd"));
			result.put("ernno",hash.get("ernno"));
			result.put("firmnm",hash.get("firmnm"));
			result.put("presinm",hash.get("presinm"));
			result.put("bizcond",hash.get("bizcond"));
			result.put("item",hash.get("item"));
			result.put("zip21",hash.get("zip21"));
			result.put("zip22",hash.get("zip22"));
			result.put("zip23",hash.get("zip23"));
			result.put("addr2",hash.get("addr2"));
			result.put("dtlsaddr2",hash.get("dtlsaddr2"));
			result.put("bo_prn",hash.get("bo_prn"));
			result.put("bo_flnm",hash.get("bo_flnm"));
			result.put("bo_tel_no1",hash.get("bo_tel_no1"));
			result.put("bo_tel_no2",hash.get("bo_tel_no2"));
			result.put("bo_tel_no3",hash.get("bo_tel_no3"));
			result.put("bo_ptph_no1",hash.get("bo_ptph_no1"));
			result.put("bo_ptph_no2",hash.get("bo_ptph_no2"));
			result.put("bo_ptph_no3",hash.get("bo_ptph_no3"));
			result.put("bo_zip1",hash.get("bo_zip1"));
			result.put("bo_zip2",hash.get("bo_zip2"));
			result.put("bo_zip3",hash.get("bo_zip3"));
			result.put("bo_addr",hash.get("bo_addr"));
			result.put("bo_dtlsaddr",hash.get("bo_dtlsaddr"));
			result.put("deps_persnm",hash.get("deps_persnm"));
			result.put("bankcd",hash.get("bankcd"));
			result.put("acctno",hash.get("acctno"));
			result.put("deps_persnm_a",hash.get("deps_persnm_a"));
			result.put("bankcd_a",hash.get("bankcd_a"));
			result.put("acctno_a",hash.get("acctno_a"));
			result.put("smsnum1",hash.get("smsnum1"));
			result.put("jide_sms",hash.get("jide_sms"));
			result.put("apttothoscnt",hash.get("apttothoscnt"));
			result.put("houstothoscnt",hash.get("houstothoscnt"));
			result.put("shoptothoscnt",hash.get("shoptothoscnt"));
			result.put("offi_roomtothoscnt",hash.get("offi_roomtothoscnt"));
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
	@RequestMapping(value="/api/Inf/getInf1011",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getInf1011(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			InfSv.getInf1011(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("boseq",hash.get("boseq"));
			result.put("selluprccd",hash.get("selluprccd"));
			result.put("areauprccd",hash.get("areauprccd"));
			result.put("dlvwoncostcd",hash.get("dlvwoncostcd"));
			result.put("stetselluprccd",hash.get("stetselluprccd"));
			result.put("prtfacty",hash.get("prtfacty"));
			result.put("prtecnt",hash.get("prtecnt"));
			result.put("girotype",hash.get("girotype"));
			result.put("girono",hash.get("girono"));
			result.put("atmyn",hash.get("atmyn"));
			result.put("aprvno",hash.get("aprvno"));
			result.put("fisccmpymangcd",hash.get("fisccmpymangcd"));
			result.put("fisccmpyprocyn",hash.get("fisccmpyprocyn"));
			result.put("empextnvalswityn",hash.get("empextnvalswityn"));
			result.put("promextnvalswityn",hash.get("promextnvalswityn"));
			result.put("extncampvalswityn",hash.get("extncampvalswityn"));
			result.put("chrgcd",hash.get("chrgcd"));
			result.put("oprenvclsfcd",hash.get("oprenvclsfcd"));
			result.put("sysuseyn",hash.get("sysuseyn"));
			result.put("migryn",hash.get("migryn"));
			result.put("oabocd",hash.get("oabocd"));
			result.put("splycostclsfcd",hash.get("splycostclsfcd"));
			result.put("splyamt",hash.get("splyamt"));
			result.put("incmgpers",hash.get("incmgpers"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}	

	//지국장정보
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Inf/getInf1101",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getInf1101(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			InfSv.getInf1101(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("deptcd",hash.get("deptcd"));
			result.put("bocd",hash.get("bocd"));
			result.put("bocd_txt",hash.get("bocd_txt"));
			result.put("bo_headnm",hash.get("bo_headnm"));
			result.put("cntrstatcd",hash.get("cntrstatcd"));
			result.put("cntrdt_from",hash.get("cntrdt_from"));
			result.put("cntrdt_to",hash.get("cntrdt_to"));
			result.put("pageno",hash.get("pageno"));
			result.put("pagesize",hash.get("pagesize"));
			result.put("totalcnt",hash.get("totalcnt"));
			result.put("boheadnmcnt",hash.get("boheadnmcnt"));
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
	@RequestMapping(value="/api/Inf/getInf1102",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getInf1102(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			InfSv.getInf1102(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd"));
			result.put("boseq",hash.get("boseq"));
			result.put("bonm",hash.get("bonm"));
			result.put("bo_headnm",hash.get("bo_headnm"));
			result.put("prn",hash.get("prn"));
			result.put("lastschir",hash.get("lastschir"));
			result.put("tel_no1",hash.get("tel_no1"));
			result.put("tel_no2",hash.get("tel_no2"));
			result.put("tel_no3",hash.get("tel_no3"));
			result.put("ptph_no1",hash.get("ptph_no1"));
			result.put("ptph_no2",hash.get("ptph_no2"));
			result.put("ptph_no3",hash.get("ptph_no3"));
			result.put("cntrdt",hash.get("cntrdt"));
			result.put("cntrexpydt",hash.get("cntrexpydt"));
			result.put("zip1",hash.get("zip1"));
			result.put("zip2",hash.get("zip2"));
			result.put("zip3",hash.get("zip3"));
			result.put("addr",hash.get("addr"));
			result.put("dtlsaddr",hash.get("dtlsaddr"));
			result.put("bo_headphot",hash.get("bo_headphot"));
			result.put("hby",hash.get("hby"));
			result.put("spc",hash.get("spc"));
			result.put("relg",hash.get("relg"));
			result.put("drink",hash.get("drink"));
			result.put("smok",hash.get("smok"));
			result.put("familylist",hash.get("familylist"));
			result.put("careerlist",hash.get("careerlist"));
			result.put("idealist",hash.get("idealist"));
			result.put("tellist",hash.get("tellist"));
			result.put("hplist",hash.get("hplist"));
			result.put("schlist",hash.get("schlist"));
			result.put("photnm",hash.get("photnm"));
			result.put("email",hash.get("email"));
			result.put("g_tel_no1",hash.get("g_tel_no1"));
			result.put("g_tel_no2",hash.get("g_tel_no2"));
			result.put("g_tel_no3",hash.get("g_tel_no3"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Inf/getInf1103",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getInf1103(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			InfSv.getInf1103(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("prn",hash.get("prn"));
			result.put("idealist",hash.get("idealist"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Inf/getInf1110",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getInf1110(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			InfSv.getInf1110(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("mode",hash.get("mode"));
			result.put("bocd",hash.get("bocd"));
			result.put("boseq",hash.get("boseq"));
			result.put("bo_headnm",hash.get("bo_headnm"));
			result.put("prn",hash.get("prn"));
			result.put("lastschir",hash.get("lastschir"));
			result.put("nativ",hash.get("nativ"));
			result.put("tel_no1",hash.get("tel_no1"));
			result.put("tel_no2",hash.get("tel_no2"));
			result.put("tel_no3",hash.get("tel_no3"));
			result.put("ptph_no1",hash.get("ptph_no1"));
			result.put("ptph_no2",hash.get("ptph_no2"));
			result.put("ptph_no3",hash.get("ptph_no3"));
			result.put("cntrdt",hash.get("cntrdt"));
			result.put("cntrexpydt",hash.get("cntrexpydt"));
			result.put("zip1",hash.get("zip1"));
			result.put("zip2",hash.get("zip2"));
			result.put("zip3",hash.get("zip3"));
			result.put("addr",hash.get("addr"));
			result.put("dtlsaddr",hash.get("dtlsaddr"));
			result.put("bo_headphot",hash.get("bo_headphot"));
			result.put("hby",hash.get("hby"));
			result.put("spc",hash.get("spc"));
			result.put("relg",hash.get("relg"));
			result.put("drink",hash.get("drink"));
			result.put("smok",hash.get("smok"));
			result.put("flnm",hash.get("flnm"));
			result.put("rshp",hash.get("rshp"));
			result.put("famlprn",hash.get("famlprn"));
			result.put("remk",hash.get("remk"));
			result.put("yymm",hash.get("yymm"));
			result.put("hstymatt",hash.get("hstymatt"));
			result.put("incmgpers",hash.get("incmgpers"));
			result.put("email",hash.get("email"));
			result.put("phot_del",hash.get("phot_del"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Inf/getInf1115",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getInf1115(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			InfSv.getInf1115(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("mode",hash.get("mode"));
			result.put("prn",hash.get("prn"));
			result.put("seq",hash.get("seq"));
			result.put("makepersnm",hash.get("makepersnm"));
			result.put("idea",hash.get("idea"));
			result.put("incmgpers",hash.get("incmgpers"));
			
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	//관할지국조정
	@SuppressWarnings({ "unchecked", "rawtypes" })  
	@RequestMapping(value="/api/Inf/getInf3201",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getInf3201(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			InfSv.getInf3201(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("deptcd",hash.get("deptcd"));
			result.put("bocd",hash.get("bocd"));
			result.put("bocd_txt",hash.get("bocd_txt"));
			result.put("procstat",hash.get("procstat"));
			result.put("dateclsf",hash.get("dateclsf"));
			result.put("from",hash.get("from"));
			result.put("to",hash.get("to"));
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
	@RequestMapping(value="/api/Inf/getInf3202",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getInf3202(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			InfSv.getInf3202(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("regdt",hash.get("regdt"));
			result.put("regno",hash.get("regno"));
			result.put("trsfbonm",hash.get("trsfbonm"));
			result.put("acptbonm",hash.get("acptbonm"));
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
	@RequestMapping(value="/api/Inf/getInf3203",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getInf3203(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			InfSv.getInf3203(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("regdt",hash.get("regdt"));
			result.put("regno",hash.get("regno"));
			result.put("medabasidt",hash.get("medabasidt"));
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
	@RequestMapping(value="/api/Inf/getInf3210",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getInf3210(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			InfSv.getInf3210(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
			result.put("keys",hash.get("keys"));
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
