import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
url = 'http://localhost:3000';
  constructor(private http : HttpClient) { }


  login(username : string, password : string) : Observable<any>{
    let body = {username : username, password : password}
    return this.http.post(this.url+'/login',body);
  }


  register(body: any) : Observable<any>{
return this.http.post(this.url+'/register',body);
  }
}