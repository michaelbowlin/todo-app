import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, zip } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  fetchTodos(): Observable<any> {
    const data = {};
    return this.http
      .get(API_URL + '/todos')
      .pipe(
        map((data) => {
          return data;
        })
      )
  }

  createTodo(inputs: any): Observable<any> {
    const url = API_URL + '/todo';
    return this.http.post(url, inputs, this.httpOptions)
      .pipe(map((data: any) => {
        debugger;
      }))
  }

  deleteTodo(id: number): Observable<any> {
    debugger;
    const url = API_URL + '/todos?_id=' + id;
    return this.http.delete(url, this.httpOptions)
      .pipe(map((data: any) => {
        debugger;
      }))
  }
}
