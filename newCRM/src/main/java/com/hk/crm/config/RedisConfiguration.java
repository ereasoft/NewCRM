package com.hk.crm.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;

@Configuration
@EnableRedisRepositories
public class RedisConfiguration {
	 @Value("${spring.redis.host}")
	    private String redisHost;

	    @Value("${spring.redis.port}")
	    private int redisPort;

	    @Bean
	    @ConditionalOnMissingBean(RedisConnectionFactory.class)
	    public RedisConnectionFactory redisConnectionFactory() {
	        return new LettuceConnectionFactory(redisHost, redisPort);
	    }

	    @Bean
	    public RedisTemplate<?, ?> redisTemplate() {
	        RedisTemplate<byte[], byte[]> redisTemplate = new RedisTemplate<>();
	        redisTemplate.setConnectionFactory(redisConnectionFactory());
	        return redisTemplate;
	    }
}
