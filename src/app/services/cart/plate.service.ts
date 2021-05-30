import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlateService {

  endpoint: string = "../../../assets/json/cart/plate/plate.json";
  constructor(private httpClient: HttpClient) { }

  getIngredients(): Observable<any> {
    return this.httpClient.get<any>(this.endpoint)
      .pipe(
        tap(users => console.log('Ingredients retrieved!')),
        catchError(this.handleError<any>('get ingredients', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
