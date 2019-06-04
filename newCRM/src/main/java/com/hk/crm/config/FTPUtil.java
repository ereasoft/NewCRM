package com.hk.crm.config;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.apache.tomcat.util.threads.TaskThread; 
 
import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.SftpException; 

public class FTPUtil {
	private static final Log log = LogFactory.getLog(TaskThread.class);
    
    private Session session = null;
    private Channel channel = null;
    private ChannelSftp channelSftp = null;
 
   // SFTP 서버연결
    public void init(){
        String url = "210.96.203.140";   
        int port = 10022;
        String user = "netdial";
        String password = "!1neomecca#3@";
         
        //System.out.println(url);
        //JSch 객체 생성
        JSch jsch = new JSch();
        try {
            //세션객체 생성 ( user , host, port )    
            session = jsch.getSession(user, url, port);
             
            //password 설정
            session.setPassword(password);
             
            //세션관련 설정정보 설정
            java.util.Properties config = new java.util.Properties();
             
            //호스트 정보 검사하지 않는다.
            config.put("StrictHostKeyChecking", "no");
            session.setConfig(config);
             
            //접속
            session.connect();
 
            //sftp 채널 접속
            channel = session.openChannel("sftp");
            channel.connect();
             
        } catch (JSchException e) {
            e.printStackTrace();
        }
        channelSftp = (ChannelSftp) channel;
         
    }
 
    // 단일 파일 업로드
    public void upload( String dir , File file){
        FileInputStream in = null;
         
        try{ //파일을 가져와서 inputStream에 넣고 저장경로를 찾아 put
            in = new FileInputStream(file);
            channelSftp.cd(dir);
            channelSftp.put(in,file.getName());
        }catch(SftpException se){
            se.printStackTrace();
        }catch(FileNotFoundException fe){
            fe.printStackTrace();
        }finally{
            try{
                in.close();
            } catch(IOException ioe){
                ioe.printStackTrace();
            }
        }
    }
 
    // 단일 파일 다운로드
    public InputStream download(String dir, String fileNm){
        InputStream in = null;
        String path = "...";
        try{ //경로탐색후 inputStream에 데이터를 넣음
            channelSftp.cd(path+dir);
            in = channelSftp.get(fileNm);
             
        }catch(SftpException se){
            se.printStackTrace();
        }
         
        return in;
    }
 
    // 파일서버와 세션 종료
    public void disconnect(){
        channelSftp.quit();
        session.disconnect();
    } 
}
