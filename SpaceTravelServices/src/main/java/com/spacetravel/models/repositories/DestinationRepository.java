package com.spacetravel.models.repositories;

import com.spacetravel.models.dto.Destination;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface DestinationRepository extends CrudRepository <Destination, Integer>{
}
