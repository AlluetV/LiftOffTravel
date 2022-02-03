import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './booking';
import { Destination } from './destination';
import { Pack } from './pack';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BookingService {
// SHARED dATA BETWEEN COMPONENTS
  selectedDestination !: Destination ;
  selectedPackage! : Pack;

// VARIABLE THAT STORES THE BOOKING DETAILS
  bookingForm! : Booking;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
 


  constructor( private http: HttpClient ) {

  }

  addBooking(){
     return this.http.post<Booking>('http://localhost:8080/booking/add',this.bookingForm, this.httpOptions)
     .pipe(
      tap(_ => console.log('fetched booking')),
      catchError(this.handleError<Booking>('packages'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}

