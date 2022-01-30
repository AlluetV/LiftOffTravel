package com.spacetravel.models.repositories;

import com.spacetravel.models.dto.Package;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackageRepository extends CrudRepository< Package , Integer > {
}
