package com.spacetravel.services;

import com.spacetravel.models.dto.Package;
import com.spacetravel.models.repositories.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/packages")
public class PackageController {

    @Autowired
    private PackageRepository packageRepository;

    @GetMapping("/all")
    public Iterable<Package> getAllPackages(){
        return packageRepository.findAll();
    }

    @PostMapping("/add")
    public Package addPackage(@RequestBody Package pack){
        System.out.println("Adding: " + pack.toString());
        return packageRepository.save(pack);
    }

    @GetMapping("/{id}")
    public Package findById(@PathVariable int idPack){
        return packageRepository.findById(idPack).orElseThrow();
    }
}
