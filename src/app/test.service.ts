import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http : HttpClient) { }

url = 'https://dummyjson.com/users?limit=10';

get(){
  return this.http.get(this.url);
}


}
