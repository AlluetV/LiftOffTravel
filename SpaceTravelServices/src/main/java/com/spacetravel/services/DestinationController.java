package com.spacetravel.services;

import com.spacetravel.models.dto.Destination;
import com.spacetravel.models.repositories.DestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/destinations")
public class DestinationController {

    @Autowired
    private DestinationRepository destinationRepository;


    @GetMapping("/all")
    public Iterable<Destination> getAllDestinations(){
        return destinationRepository.findAll();
    }

    @PostMapping("/add")
    public Destination addDestination(@RequestBody Destination destination){
        System.out.println("Adding: " + destination.toString());
        return destinationRepository.save(destination);
    }

    @GetMapping("/{id}")
    public Destination findById(@PathVariable int id){
        return destinationRepository.findById(id).orElseThrow();
    }

}
