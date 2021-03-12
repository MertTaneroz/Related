import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetJsonService {

  constructor(private http: HttpClient) { }

  getTodoData() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }
  getUserData() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}