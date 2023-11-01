import { Injectable } from '@angular/core';
import { Users } from './users';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
 
export class LoginservicesService {
  private baseurl='http://localhost:8080/login'
  router: any;
  constructor(private http:HttpClient){}
 
  login(login:Users):Observable<Users>{
    return this.http.post<Users>('${this.baseurl}',login);
  }
}
  

  