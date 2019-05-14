package com.hk.crm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hk.crm.service.SampleService;
import java.util.*;

@RestController
public class SampleController {
	
	@Autowired
	private SampleService sampleSv;
	
	@SuppressWarnings("rawtypes")
	@RequestMapping("/sampleList")  
	public List<HashMap>  sampleList() { 
		HashMap hash = new HashMap(); 
		List<HashMap> result =  sampleSv.getSampleList(hash);
		return result;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" }) 
	@RequestMapping("/sampleDetail") 
	public List<HashMap>  sampleDetail(String rdrno ) { 
		HashMap hash = new HashMap();
		if(rdrno != null)  hash.put("rdr_no",rdrno);  
		List<HashMap> result =  sampleSv.getSampleList(hash);
		return result;
	}
	
}
