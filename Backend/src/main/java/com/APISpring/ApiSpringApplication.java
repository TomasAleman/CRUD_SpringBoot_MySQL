package com.APISpring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EntityScan("com/APISpring/models")
public class ApiSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiSpringApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer(){
		return  new WebMvcConfigurer() {
			@Override
			public  void addCorsMappings(CorsRegistry registry){
				registry.addMapping("/**").allowedOrigins("http://localhost:3000").allowedMethods("*").allowedHeaders("*");
			}
		};
	}

}
