import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './booking';
import { Destination } from 'src/app/destination';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  userBooking : Booking [] = []

  constructor( private http: HttpClient ) {
    
   }
}

//setDestination ( ){}
 // this.item.push(planets);

 //getDestination(){}

 //clearDestination(){
  // this.selectedDestination = [];
  // return this.selectedDestination;
// }
