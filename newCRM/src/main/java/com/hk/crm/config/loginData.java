package com.hk.crm.config;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.io.Serializable; 

@Getter @Setter
@RedisHash("loginData")
public class loginData implements Serializable{ 
 
	private static final long serialVersionUID = 1L;
	@Id
    private String loginId;
    private String loginNm;
    private String emp_no;
    private String hdptcd;
    private String posi;
    private String deptnm;
    private String yyyymm;
    private String email;
    private String sessionkey;
    private String  loginDate;
     
    @Builder
    public loginData(String loginId, String loginNm, String emp_no, String hdptcd, String posi, String deptnm, String yyyymm, String email, String sessionkey, String  loginDate ) {
        this.loginId = loginId;
        this.loginNm = loginNm;
        this.emp_no = emp_no;
        this.hdptcd = hdptcd; 
        this.posi = posi;
        this.deptnm = deptnm;
        this.yyyymm = yyyymm;
        this.email = email;
        this.sessionkey = sessionkey;
        this.loginDate = loginDate;
    }
    
}
 