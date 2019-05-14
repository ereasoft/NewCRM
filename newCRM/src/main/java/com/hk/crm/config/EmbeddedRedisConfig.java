package com.hk.crm.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value; 
import org.springframework.context.annotation.Profile;
import redis.embedded.RedisServer;

import java.io.IOException;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

@Slf4j //lombok
@Profile("local") // profile�� local�϶��� Ȱ��ȭ

public class EmbeddedRedisConfig {
	@Value("${spring.redis.port}")
    private int redisPort;

    private RedisServer redisServer;

    @PostConstruct
    public void redisServer() throws IOException {
            redisServer = new RedisServer(redisPort);
            redisServer.start();
    }

    @PreDestroy
    public void stopRedis() {
        if (redisServer != null) {
            redisServer.stop();
        }
    }
}
