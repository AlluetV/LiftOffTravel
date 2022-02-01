import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/booking';
import { BookingService } from 'src/app/booking.service';
import { ActivatedRoute } from '@angular/router';
import { Pack } from 'src/app/pack';
import { Destination } from 'src/app/destination';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  destination!: Destination;
  userPack!: Pack;

  bookingForm = this.fb.group({
    idDestination: '',
    idPackage : '',
    username :'',
    email :'',
    travelDate :'',
    count :'',
    price: ''
  });

 
 

  constructor(private route : ActivatedRoute , private bookingService : BookingService  , private fb : FormBuilder) { }

  ngOnInit() {

    this.destination = this.bookingService.selectedDestination;
    this.userPack = this.bookingService. selectedPackage;
  }

 onSubmit():void{}
  
}
