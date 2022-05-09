package com.spacetravel.services;

import com.spacetravel.models.dto.Booking;

import com.spacetravel.models.repositories.BookingRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @GetMapping("/all")
    public Iterable<Booking> getAllDestinations(){
        return bookingRepository.findAll();
    }

    @PostMapping("/add")
    public Booking addBooking(@RequestBody Booking booking){
        System.out.println("Adding: " + booking.toString());
        return bookingRepository.save(booking);
    }
}
