import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact';
import { Observable, catchError ,throwError} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseurl:string;

  constructor(private httpClient:HttpClient) {
    this.baseurl = "http://localhost:8080/contacts";
    
   }
  //Get all contacts data
  public findAll():Observable<Contact[]>{
    let dataUrl:string =`${this.baseurl}`;
    return this.httpClient.get<Contact[]>(dataUrl).pipe(catchError(this.handleError))
  }
 // get single contacts
  public getContactById(id :number): Observable<Contact>{
  return this.httpClient.get<Contact>(`${this.baseurl}/${id}`).pipe(catchError(this.handleError))
}
  
 // create contacts
  public createcontact(contact:Contact):Observable<Contact>{
    const dataUrl:string = `${this.baseurl}`;
    return this.httpClient.post<Contact>(dataUrl,contact).pipe(catchError(this.handleError))
 }
  //update
  
  updateContacts(id: number,contact : Contact) : Observable <Object>
  {
    return this.httpClient.put(`${this.baseurl}/${id}`,contact).pipe(catchError(this.handleError))
  }
  
 // delete contact
  public deleteContacts(id:number):Observable<Contact>{
    let dataUrl =`${this.baseurl}/${id}`;
    return this.httpClient.delete<Contact>(dataUrl).pipe(catchError(this.handleError))
  }
  //search by title
  public searchContacts(name:string):Observable<Contact[]>{
    let dataUrl:string =`${this.baseurl}/name/${name}`;
    return this.httpClient.get<Contact[]>(dataUrl).pipe(catchError(this.handleError))
  }
  
  
 // error solve
  public handleError(error:HttpErrorResponse)
  {
    let errorMessage:string='';
    if(error.error instanceof ErrorEvent){
      errorMessage='Error:${error.error.message}'
    }
    else
    {
      errorMessage ='Status :${error.status{\n Message: ${error.message}';
    }
    return throwError(errorMessage)
  }
}
