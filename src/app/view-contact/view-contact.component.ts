import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent  implements OnInit{
   
  id!: number;
    contact!:Contact;
  constructor(private route: ActivatedRoute ,private contactservice: ContactService)
    {}
  
  ngOnInit(): void {
  //retrieve the value of the parameter using the route snapshot.
    this.id=this.route.snapshot.params['id'];
    this.contactservice.getContactById(this.id).subscribe(data=>
      {
        this.contact= data;
      })
  }
  
 
  }
  
  
    
   
   
   
     
  
    
    
    
    
  


