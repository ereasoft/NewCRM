package com.hk.crm.config;

import java.io.InputStream;
import java.util.HashMap; 
import java.util.Iterator;

import Seed.SeedCipher;




public class Util {


@SuppressWarnings({ "unchecked", "rawtypes" })  //map key를 소문자로 변경
 public static HashMap changeToLowerMapKey(HashMap map){ 
	
	 HashMap temp = new HashMap();   
	 Iterator<String> iteratorKey = map.keySet().iterator();  
	 while (iteratorKey.hasNext()) { 
			String key = iteratorKey.next(); 
			temp.put(key.toLowerCase(), map.get(key));

		}  
	 return temp;
 } 

	public static String seedDecode(String encodeStr) throws Exception { 
		String key = "hk_crm_yunak_sc2";  
		SeedCipher seed = new SeedCipher();
		byte[] encryptbytes = Seed.Base64Encoder.decode(encodeStr);
		return seed.decryptAsString(encryptbytes, key.getBytes(), "UTF-8");
	}
	
	public  static  String strToNull(Object obj ) {
		String rtn = "";
		if(obj != null) {
			rtn = obj.toString();
		} 
		return  rtn;
	}
	

}
