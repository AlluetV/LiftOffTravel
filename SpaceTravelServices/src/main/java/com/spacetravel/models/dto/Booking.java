package com.spacetravel.models.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_booking")
    private Integer idBooking;
    private String idDestination;
    private String idPackage;
    private String username;
    private String email;
    private Integer price;
    private Date travelDate;
    private Integer count;
}
