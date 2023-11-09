import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactUsService  {

  constructor(private client:HttpClient) { }

  postContact(contactbody:any){
    const contactUrl='http://localhost:5000/contactus/';
   return this.client.post(contactUrl,contactbody)
  }
  getContact(){
    const contactUrl='http://localhost:5000/contactus/';
   return this.client.get(contactUrl)
  }
}
