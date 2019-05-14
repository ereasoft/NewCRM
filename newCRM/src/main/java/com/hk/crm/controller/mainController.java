package com.hk.crm.controller;

import java.net.URLEncoder; 

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse; 

import org.springframework.stereotype.Controller; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod; 

import Seed.SeedCipher;
import Seed.Base64Encoder;

@Controller
public class mainController {

	@RequestMapping("/")  
	public String  index( ) {  
		return "index.html";
	}
	
	@RequestMapping(value="/sslTm",  method = RequestMethod.GET)  
	public void  sslOn(String usrId, String usrNm,  HttpServletResponse rep, HttpServletRequest req ) throws Exception {  

		String key = "hk_crm_yunak_sc2";
		
		SeedCipher seed = new SeedCipher();  
		String loginID = seed.decryptAsString(Base64Encoder.decode(usrId), key.getBytes(), "UTF-8");
		String loginNm =  URLEncoder.encode(seed.decryptAsString(Base64Encoder.decode(usrNm), key.getBytes(), "UTF-8"),"UTF-8");
		req.setAttribute("loginID",loginID);
		req.setAttribute("loginNm",loginNm); 
		
		rep.sendRedirect("/indexTm.html?loginID="+loginID+"&loginNm="+loginNm);
		
	} 
	
}
