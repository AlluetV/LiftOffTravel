import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/booking';
import { BookingService } from 'src/app/booking.service';
import { Pack } from 'src/app/pack';
import { Destination } from 'src/app/destination';
import { FormBuilder ,FormGroup, FormControl, NgForm ,NgModel} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  destination!: Destination;
  userPack!: Pack;

  booking!: Booking  

  confirmation! : Booking;

  isDisplay = false;

  constructor( private bookingService : BookingService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.destination = this.bookingService.selectedDestination;
    this.userPack = this.bookingService. selectedPackage;
    //this.booking = new Booking();
    this.booking = { idDestination: this.destination.id,
      idPackage: this.userPack.idPack,
      count: 2,
      price: this.userPack.price};
    /*this.booking.idDestination = this.destination.id;
    this.booking.idPackage = this.userPack.idPack;
    this.booking.price = this.userPack.price;
    this.booking.count = 2;*/
  }

  

 onSubmit(){
   console.log("on submit");
   console.log(this.booking);
   //this.booking.price = this.userPack.price * this.booking.count;
   this.bookingService.addBooking(this.booking).subscribe(bookingResponse => this.confirmation = bookingResponse);
   //console.log(this.confirmation$)
   
 }

 display(){
   this.isDisplay = !this.isDisplay;
 } 

}

