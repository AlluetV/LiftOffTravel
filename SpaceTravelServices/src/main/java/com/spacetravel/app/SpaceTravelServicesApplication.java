package com.spacetravel.app;

import com.spacetravel.config.SpaceTravelConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@Import(SpaceTravelConfig.class)
@EntityScan("com.spacetravel.models.dto")
@EnableJpaRepositories(basePackages = "com.spacetravel.models.repositories")
public class SpaceTravelServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpaceTravelServicesApplication.class, args);
	}

}
