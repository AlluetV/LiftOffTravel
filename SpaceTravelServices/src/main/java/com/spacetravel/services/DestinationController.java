package com.spacetravel.services;

import com.spacetravel.dto.Destination;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/destinations")
public class DestinationController {

    List<Destination> destinations;

    @PostConstruct
    public void init(){
        destinations = new ArrayList<>();
        destinations.add(new Destination(1,"Mars","Mars Planet"));
        destinations.add(new Destination(2,"Jupiter","Jupiter Planet"));
    }

    @GetMapping("/all")
    public List<Destination> getAllDestinations(){
        return destinations;
    }

    @PostMapping("/add")
    public Destination addDestination(@RequestBody Destination destination){
        System.out.println("Adding: " + destination.toString());
        destinations.add(destination);
        return destination;
    }

}
