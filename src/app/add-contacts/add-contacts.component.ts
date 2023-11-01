import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/Contact';
import { ActivatedRoute,Router } from '@angular/router';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent  {
  Contact:Contact=new Contact();
  
  constructor(private  router:Router,private contactservice:ContactService){}
   createContact()
   {
    this.contactservice.createcontact(this.Contact).subscribe(result=>
      {
      console.log(result);
      this.gotoUserList()
    },
    error=>console.log(error));
   }
   gotoUserList(){
    this.router.navigate(['/contacts/home']);

   }
   onSubmit(){
    console.log(this.Contact);
    this.createContact();
    alert("added contact sucessfully!!!")
   }


    

  }

  
    

  
 

