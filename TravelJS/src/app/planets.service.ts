import { Injectable } from '@angular/core';
import { Planet } from './planets';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  item : Planet[] = [];

  constructor(private http: HttpClient) {

  }

  //addPlanet(planets:Planets){
   // this.item.push(planets);
 // }

  getItems(){
    return this.item;
  }

  clearPlanet(){
    this.item = [];
    return this.item;
  }

  getPlanetDetails(){
    return this.http.get<Planet[]>('http://localhost:8080/destinations/all')
    .pipe(
      tap(_ => console.log('fetched planets')),
      catchError(this.handleError<Planet[]>('planets', []))
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
