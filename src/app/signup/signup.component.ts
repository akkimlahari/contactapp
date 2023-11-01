import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  username: string ="";
  email: string ="";
  password: string ="";
  router: any;
  constructor(router:Router,private http: HttpClient )
  {
  }
  save()
  {

    let bodyData = {
      "username" : this.username,
      "email" : this.email,
      "password" : this.password
    };
    this.http.post("http://localhost:8080/contacts/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        
        
        alert(" Registered Successfully");
    });
  }
 


}
