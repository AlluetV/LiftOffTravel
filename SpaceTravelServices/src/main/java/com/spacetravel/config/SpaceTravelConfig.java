package com.spacetravel.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@ComponentScan("com.spacetravel")
public class SpaceTravelConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/destinations/**").allowedOrigins("http://localhost:4200");
                registry.addMapping("/packages/**").allowedOrigins("http://localhost:4200");
                registry.addMapping("/booking/**").allowedOrigins("http://localhost:4200");
            }
        };
    }
}
