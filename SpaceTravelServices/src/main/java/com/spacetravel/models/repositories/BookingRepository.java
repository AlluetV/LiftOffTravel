package com.spacetravel.models.repositories;

import com.spacetravel.models.dto.Booking;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends CrudRepository<Booking, Integer> {

}
