import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ContactUsService } from 'src/app/services/contact-us.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-post-contact-us',
  templateUrl: './post-contact-us.component.html',
  styleUrls: ['./post-contact-us.component.css']
})
export class PostContactUsComponent  implements OnInit{
  responseMessage:any;
  constructor(private snackBar:SnackbarService,private ngService:NgxUiLoaderService,private contactUs:ContactUsService){}

  mail={
    email:'',
    fullName:'',
    message:'',
    subject:''
  }

  sendMail(){
    this.ngService.start()
    var data={
      'name': this.mail.fullName,
      'subject':this.mail.subject,
      'mail':this.mail.message,
      'email':this.mail.email
    }

    this.contactUs.postContact(data).subscribe((response:any)=>{
      console.log(response)
      this.responseMessage=response.message
      this.snackBar.openSnackBar(this.responseMessage,"")
      this.ngService.stop()
      
    },(error)=>{
        this.ngService.stop()
        if(error.error?.message){
          this.responseMessage=error.error?.message
        }

        this.snackBar.openSnackBar(this.responseMessage,"")


    })
  }
  ngOnInit(): void {
      
  }
}
