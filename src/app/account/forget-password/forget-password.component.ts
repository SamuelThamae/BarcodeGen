import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalMessages } from 'src/app/gobalMessages/globalMessage';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
constructor(private ngService:NgxUiLoaderService,private userService:UserService,private route:Router, private snackbar:SnackbarService){}

forgotPassword= new FormGroup({
  'email':new FormControl('',[Validators.pattern(GlobalMessages.regaxEmail),Validators.required])
})

resetPassword()
{
  this.ngService.start()
  var data={
    'email':this.forgotPassword.value.email
  }
  this.userService.forgetPassword(data).subscribe((response:any)=>{
    console.log(response)
    this.ngService.stop()
    this.snackbar.openSnackBar(response.message,'')
  })

}
ngOnInit(): void {
    
}
}
