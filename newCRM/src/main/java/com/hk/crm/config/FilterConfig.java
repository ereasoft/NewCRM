package com.hk.crm.config;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException; 

public class FilterConfig  implements Filter{
	
	public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("init filter!!");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

    	MyRequestWrapper myRequestWrapper = new MyRequestWrapper((HttpServletRequest)servletRequest);
        filterChain.doFilter(myRequestWrapper,servletResponse);
    }

    @Override
    public void destroy() {
        System.out.println("destroy filter!");
    } 


}
