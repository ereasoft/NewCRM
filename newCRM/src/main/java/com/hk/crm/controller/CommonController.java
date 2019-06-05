package com.hk.crm.controller;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.data.redis.core.RedisTemplate; 
import org.springframework.ui.ModelMap; 
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod; 
import org.springframework.web.bind.annotation.RestController; 

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hk.crm.config.FTPUtil;
import com.hk.crm.config.Util;
import com.hk.crm.config.loginData;
import com.hk.crm.config.loginDataRedisRepository; 
import com.hk.crm.service.CommonService; 

import Seed.Base64Encoder;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;


import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.apache.tomcat.util.threads.TaskThread;
 


@RestController
public class CommonController {
	private static final Log log = LogFactory.getLog(TaskThread.class);
	
	@Autowired
    private loginDataRedisRepository sessionRedis;

	
	@Autowired
	private CommonService comrSv; 
	RedisTemplate<String, Object> redisTemplate; 
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  //�슦�렪踰덊샇 李얘린
	@RequestMapping(value="/api/common/getZip5Daum",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getZip5Daum(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			comrSv.getZip5Daum(hash);   
			result.put("errmsg",hash.get("errmsg"));
			result.put("bocd",hash.get("bocd")); 
			result.put("status", "true");
		} catch(Exception ex) {
			 result.put("status", "false");
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  //濡쒓렇�씤 �씠�젰
	@RequestMapping(value="/api/common/getDkhtLog",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getDkhtLog(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			comrSv.getDkhtLog(hash);   
			result.put("errmsg",hash.get("errmsg")); 
			result.put("hiscur",hash.get("hiscur")); 
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  //SMS諛쒖넚
	@RequestMapping(value="/api/common/getSendSMS",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getSendSMS(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			hash =Util.changeToLowerMapKey( mapper.readValue(body, new TypeReference<HashMap>(){}));   
			hash.put("incmgpers",hash.get("loginid")) ; 
			comrSv.getSendSMS(hash);   
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  //濡쒓렇�씤
	@RequestMapping(value="/getLogin",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  getLogin(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap(); 
		 
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			hash =Util.changeToLowerMapKey( mapper.readValue(body, new TypeReference<HashMap>(){}));     
			hash.put("log_pwd",Base64Encoder.encode(hash.get("log_pwd").toString().getBytes()) );
			comrSv.getLogin(hash);   
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
				
				
				
				//loginData savedSession = sessionRedis.findById(result.get("ov_id").toString()).get(); 
				
			}else {
				result.put("status", "false"); 
				result.put("success", false);
			}
			
			
		} catch(Exception ex) {
			 result.put("status", "false");
				result.put("success", false);
			 result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  //SFTP�뀒�뒪�듃
	@RequestMapping(value="/api/common/sftp",  method = RequestMethod.GET, headers="Accept=application/json")  
	public  HashMap  sftp(  ) throws IOException { 
		 HashMap result = new HashMap();   
			
			FTPUtil  sftp = new FTPUtil();  
			
			sftp.init();
			InputStream in = sftp.download("/201905/09", "N-20190509-111327-01090529105.wav") ;
			int i;
			StringBuffer buffer = new StringBuffer();
			byte[] b = new byte[4096];
			while( ( i = in.read(b)) != -1){
			 buffer.append(new String(b, 0, i));
			}
			String str = buffer.toString();
			
			result.put("file", str);
			
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  //ARS �씤利앹쿂由�
	@RequestMapping(value="/api/common/insertArsRec",  method = RequestMethod.POST, headers="Accept=application/json")  
	public  HashMap  insertArsRec(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();  
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			hash =Util.changeToLowerMapKey( mapper.readValue(body, new TypeReference<HashMap>(){}));      
			
            FTPUtil  sftp = new FTPUtil();   
			sftp.init();
			
			String path1 = hash.get("inforkey").toString().substring(0, 6);
			String path2 = hash.get("inforkey").toString().substring(6, 8);
			InputStream in = sftp.download("/"+ path1 +"/" + path2, hash.get("wav").toString()) ;

			hash.put("fileobject",in);
			
			//�뙆�씪 ���옣�떆�옉
			String downUrl = "/home/crmweb/appcrm/crm/ROOT/ars/";
			//downUrl = "D:\\hankyung\\ars\\";
			File file = new File(downUrl + hash.get("wav").toString());
			FileOutputStream out = new FileOutputStream(file);
			
			byte[] data = new byte[1024];
			int length = 0;

			while( (length = in.read(data)) != -1 ) {
				out.write(data, 0, length);
			}
			out.close();
			//�뙆�씪 ���옣�셿猷� 
		
			comrSv.insertArsRec(hash);   
			result.put("errmsg",hash.get("errmsg"));   
			
			if(result.get("errmsg") == null) {
				result.put("status", "true"); 
				result.put("success", true);
			}else {
				result.put("status", "false"); 
				result.put("success", false);
			} 
		} catch(Exception ex) {
			  result.put("status", "false");
			  result.put("success", false);
			  result.put("errmsg", ex.getMessage());
			 log.debug(ex.getMessage());
		}
		return result;
	}
	
	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })  //지국정보 tree 가져오기
	@RequestMapping(value="/api/common/getT714_0001",  method = RequestMethod.GET, headers="Accept=application/json")  
	public  HashMap  getT714_0001(  @RequestBody String body,ModelMap model ) { 
		HashMap result = new HashMap();
		try { 
			ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			comrSv.getT714_0001(hash);  
			result.put("errcode",hash.get("errcode"));
			result.put("errmsg",hash.get("errmsg"));
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
	
	

}
