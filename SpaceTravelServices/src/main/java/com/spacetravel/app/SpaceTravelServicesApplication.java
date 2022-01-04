package com.spacetravel.app;

import com.spacetravel.config.SpaceTravelConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import(SpaceTravelConfig.class)
public class SpaceTravelServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpaceTravelServicesApplication.class, args);
	}

}
