import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Pack } from './pack';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PackService {
  package : Pack[]=[];

  constructor( private http: HttpClient ) { }

  getPackDetails(){
    return this.http.get<Pack[]>('http://localhost:8080/packages/all')
    .pipe(
    tap(_ => console.log('fetched packages')),
    catchError(this.handleError<Pack[]>('packages', []))
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





