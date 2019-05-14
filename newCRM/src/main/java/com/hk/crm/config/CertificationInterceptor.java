package com.hk.crm.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper; 
import com.hk.crm.config.loginData;
import com.hk.crm.config.loginDataRedisRepository;

import io.micrometer.core.instrument.util.IOUtils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Component
public class CertificationInterceptor implements HandlerInterceptor{
	
     	@Autowired
       private loginDataRedisRepository sessionRedis;

	    @Override 
		@SuppressWarnings("rawtypes")
	    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
	            throws Exception {
	        
	    	boolean rtn = true; 
	    
	    	String body = IOUtils.toString(request.getInputStream());   
	    	
	    	ObjectMapper mapper = new ObjectMapper(); 
			HashMap hash = new HashMap();   
			hash = mapper.readValue(body, new TypeReference<HashMap>(){}); 
			
			String nowDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd")) ;
			
			
			loginData savedSession = sessionRedis.findById(hash.get("loginID").toString()).get();  
			
			if(savedSession == null)  {
				throw new Exception("로그인정보가 존재하지 않습니다."); 
			}
			if(savedSession.getSessionkey() == null)  {
				throw new Exception("세션키가 존재하지 않습니다. "); 
			}
			if(!savedSession.getSessionkey().toString().equals(hash.get("sessionkey").toString()) )  {
				throw new Exception("세션키가 인증서버에 키와 다릅니다."); 
			}
			if(!savedSession.getLoginDate().toString().substring(0, 8).equals(nowDate) )  {
				throw new Exception("인증유효기간이 만료되었습니다."); 
			} 
	    	 
	    	return  rtn;
	        
	    }
	 
	    @Override
	    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
	            ModelAndView modelAndView) throws Exception {
	        // TODO Auto-generated method stub 
	       
	    }
	 
	    @Override
	    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
	            throws Exception {
	        // TODO Auto-generated method stub
	    	 
	    }
	 
	}  



