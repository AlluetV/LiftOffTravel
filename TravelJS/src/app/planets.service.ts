import { Injectable } from '@angular/core';
import { Destination } from './destination';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  item : Destination[] = [];

  constructor(private http: HttpClient) {

  }

  //addPlanet(planets:Planets){
   // this.item.push(planets);
 // }

  getItems(){
    return this.item;
  }

  clearDestination(){
    this.item = [];
    return this.item;
  }

  getPlanetDetails(){
    return this.http.get<Destination[]>('http://localhost:8080/destinations/all')
    .pipe(
      tap(_ => console.log('fetched planets')),
      catchError(this.handleError<Destination[]>('planets', []))
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
