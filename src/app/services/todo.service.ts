import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, zip } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  fetchTodos(): Observable<any> {
    const data = {};
    return this.http
      .get(API_URL + '/todos')
      .pipe(
        map((data) => {
          return data;
          debugger;

        })
      )
    // .catch(this.handleError); 
  }
}
