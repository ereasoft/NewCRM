package com.hk.crm;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@SpringBootApplication
@ServletComponentScan  
@MapperScan("com.hk.crm.mapper") 
public class NewCrmApplication {

	 
	public static void main(String[] args) {		
		SpringApplication.run(NewCrmApplication.class, args);
	}

}

