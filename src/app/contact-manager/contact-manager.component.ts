import { Component,OnInit } from '@angular/core';
import { Contact } from '../models/Contact';
import { ContactService } from '../services/contact.service';


@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent  implements OnInit{
  public loading : boolean= false;
   public contacts:Contact[]=[];
  name:any;
  public errorMessage:string | null=null;
  constructor(private contactservice:ContactService){}
  ngOnInit(): void {
    this.loading=true;
    this.contactservice.findAll().subscribe((data: Contact[])=>{
          this.contacts=data;
          this.loading=false;
          this.getAllcontactsfromserver();
          
        
    },
      (error:any)=>{
        this.errorMessage='AN error occured while loading contacts.';
        this.loading=false;
      }
    );
    }
    public getAllcontactsfromserver(){
      this.loading=true;
      this.contactservice.findAll().subscribe((data: Contact[]) =>{
            this.contacts=data;
            this.loading=false;

    })
  }
    public clickDeleteContact(id:number){
           if(id){
            this.contactservice.deleteContacts(id).subscribe(data=>{
           this.getAllcontactsfromserver();
            },(error)=>{
              this.errorMessage=error;
            })
          }
        }
      public search(){
        if(this.name){
              this.contactservice.searchContacts(this.name).subscribe(data=>{
                this.contacts=data;
                console.log("Search method called");
              },(error)=>{
                this.errorMessage=error;
        }) ;
    }}
  }
    
       
    
  


 
  

