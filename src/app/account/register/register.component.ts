import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalMessages } from 'src/app/gobalMessages/globalMessage';
import { SnackbarService } from 'src/app/services/snackbar.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  responseMessage:any
  
  constructor(
    private servce:UserService,
    private route:Router,
    private ngxService:NgxUiLoaderService,
    private snackbar:SnackbarService
    
    ){}
  userRegistration=new FormGroup({

   'name': new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern(GlobalMessages.regexName)]),
    'surname': new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern(GlobalMessages.regexName)]),
    'pass':new FormControl('',[Validators.minLength(6),Validators.required]),
    'password2':new FormControl('',[Validators.minLength(6),Validators.required]),
    'email':new FormControl('',[Validators.required,Validators.pattern(GlobalMessages.regaxEmail)]),
    'cellphone':new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern(GlobalMessages.regexCellphone)]),
 
  });

  userSubmit(){
    
      
   if(this.userRegistration.value.pass!==this.userRegistration.value.password2)
    {
       this.responseMessage="Password must match ";
    }else{
      this.ngxService.start();
      var data={
        name:this.userRegistration.value.name,
        surname:this.userRegistration.value.surname,
        email:this.userRegistration.value.email,
        cellphone:this.userRegistration.value.cellphone,
        password:this.userRegistration.value.password2
      }

      this.servce.register(data).subscribe((response:any)=>{
        this.ngxService.stop();
        this.responseMessage=response?.message;
        this.snackbar.openSnackBar(this.responseMessage,"")
        this.route.navigate(['/account/login']);
     
      })
    }
  }
  ngOnInit(): void {
    
  }
}
