import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-get-contact-us',
  templateUrl: './get-contact-us.component.html',
  styleUrls: ['./get-contact-us.component.css']
})
export class GetContatUsComponent implements OnInit {
  constructor(private ngservice:NgxUiLoaderService, private contact:ContactUsService, private route:Router){}
  messages:any[]=[]
  dataMsg={
    subject:'',
    message:'',
    email:'',
    fullName:'',
    dateCreated:'',
    status:''
  }

  ngOnInit(): void {
    this.ngservice.start()
    
    this.contact.getContact().subscribe((response:any)=>{
      console.log(response.result)
      this.messages=response.result
      this.ngservice.stop()
    })
      
  }
}
