package com.hk.crm.config;

import java.nio.charset.Charset;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.servlet.WebMvcRegistrations;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer,WebMvcRegistrations{
	 @Autowired
	CertificationInterceptor certificationInterceptor;
	    
	    public void addInterceptors(InterceptorRegistry registry) {
	        registry.addInterceptor(certificationInterceptor)  
                    .addPathPatterns("/api/**/**")
	                .excludePathPatterns("/api/common/sftp");
	    }
	    
	    @Bean
	    public FilterRegistrationBean<FilterConfig> filterConfig(){
	        FilterRegistrationBean<FilterConfig> bean = new FilterRegistrationBean<FilterConfig>();
	        bean.setFilter(new FilterConfig()); 
	        return bean;
	    }  
	    
	    @Bean
	    public HttpMessageConverter<String> responseBodyConverter() {
	        return new StringHttpMessageConverter(Charset.forName("UTF-8"));
	    } 
}
