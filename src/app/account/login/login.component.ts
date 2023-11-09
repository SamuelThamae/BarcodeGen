
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GlobalMessages } from 'src/app/gobalMessages/globalMessage';
import { AuthService } from 'src/app/services/auth.service';
import { SnackbarService } from 'src/app/services/snackbar.service';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'barcodeGen';
  message:any;
  
  constructor(private snackBar:SnackbarService,
    private authService:AuthService,
     private router:Router,
    
    ){}
  
  loginForm=new FormGroup({

     'pass':new FormControl('',[Validators.minLength(6),Validators.required]),
     'email':new FormControl('',[Validators.required,Validators.pattern(GlobalMessages.regaxEmail)]),
     
   });

   userLogin(){
 
   
    var data={
      'email':this.loginForm.value.email,
        'password':this.loginForm.value.pass
     }
    this.authService.login(data).subscribe((response:any)=>{

       
        this.snackBar.openSnackBar(response.message,"")
        this.router.navigate(['home'])
    
    
    })
   }

   

  

   ngOnInit(): void {
  
    if(this.authService.isLoggedIn$){
      this.router.navigate(['home'])
    }
   }
}
