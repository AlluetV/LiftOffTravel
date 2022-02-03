import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/booking';
import { BookingService } from 'src/app/booking.service';
import { Pack } from 'src/app/pack';
import { Destination } from 'src/app/destination';
import { FormGroup, FormControl, NgForm ,NgModel} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  destination!: Destination;
  userPack!: Pack;

  bookingForm = new FormGroup({
    username : new FormControl(''),
    email :new FormControl(''),
    travelDate : new FormControl(''),
    count :new FormControl(''),
    price: new FormControl('')
  });

  confirmation$! : Observable<Booking>;

  isDisplay = false;

  constructor( private bookingService : BookingService) { }

  ngOnInit() {

    this.destination = this.bookingService.selectedDestination;
    this.userPack = this.bookingService. selectedPackage;
  }

  

 onSubmit(bookingForm: FormGroup){
   console.log("on submit");
  this.bookingService.bookingForm.idDestination = this.destination.id;
  this.bookingService.bookingForm.idPackage = this.userPack.idPack;
  this.bookingService.bookingForm.username =  this.bookingForm.get('username')?.value; 
  this.bookingService.bookingForm.email = this.bookingForm.get('email')?.value;  
  this.bookingService.bookingForm.travelDate = this.bookingForm.get('travelDate')?.value;
  this.bookingService.bookingForm.count = this.bookingForm.get('count')?.value; 
  this.bookingService.bookingForm.price =  this.userPack.price;



  this.confirmation$ = this.bookingService.addBooking();
 }

 display(){
   this.isDisplay = !this.isDisplay;
 } 

}

