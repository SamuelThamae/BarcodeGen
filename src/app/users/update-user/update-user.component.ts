import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GlobalMessages } from 'src/app/gobalMessages/globalMessage';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent  implements OnInit{
  email:any;
  userData:any[]=[];
  message:any;
 
  constructor(private activateRoute:ActivatedRoute , private userService:UserService){
    
  }


  updatePassword={
    email:this.activateRoute.snapshot.params['email'],
    currentPass:'',
    newPass:'',
    confirmPass:''
  }


  submitPassword(){
    if(this.updatePassword.confirmPass == this.updatePassword.newPass)
    {
       var data={
      'email':this.updatePassword.email,
      'currentPass':this.updatePassword.currentPass,
      'newPassword':this.updatePassword.newPass
    }
    }else{
       this.message=GlobalMessages.passwordMessage
    }
   
  }
  ngOnInit(): void {
    this.email=this.activateRoute.snapshot.params['id']
  
      this.userService.getProfile(this.email) .subscribe((response:any)=>{
       this.userData=response.data;
        console.log(this.userData)
    })
  }
}
