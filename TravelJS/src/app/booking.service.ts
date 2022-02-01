import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './booking';
import { Destination } from './destination';
import { Pack } from './pack';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  selectedDestination !: Destination ;
  selectedPackage! : Pack;
 
 /* 
  username : String;
  email : String;
  price :String;
  travelDate : String;
  count : ;*/

  
  constructor( private http: HttpClient ) {
  
   }
}

