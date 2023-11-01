import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Contact } from '../models/Contact';
import { ActivatedRoute,Router, convertToParamMap } from '@angular/router';
import { ContactService } from '../services/contact.service';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{

  id!: number;
  contact: Contact =new Contact();
 
  constructor(private contactservice:ContactService,
    private route: ActivatedRoute,
    private router : Router){}

    ngOnInit(): void {
    
//Angular Router provides methods to get route parameters:Using the route snapshot
//retrieve the value of the parameter using the route snapshot.
    this.id = this.route.snapshot.params['id'];
    this.contactservice.getContactById(this.id).subscribe(data=> {
       
       this.contact = data;
     },
     error =>console.log(error));
    }
     
    onSubmit()
    {
      this.contactservice.updateContacts(this.id,this.contact).subscribe(data=>{
        this.gotoContactList();
        alert("contact edited successfully.......")
      },
      error =>console.log(error));
    }
 
    gotoContactList()
    {
    this.router.navigate(['/contacts/home']);
    }

 
    
  }
 



  

 
  