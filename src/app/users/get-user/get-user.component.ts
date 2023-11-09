import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
constructor(private activatedRoute: ActivatedRoute,private route:Router,private ngservice:NgxUiLoaderService,private userService:UserService) { }
  userID:any=this.activatedRoute.snapshot.params['id'];
  message:any;
  userData:any;
  editUser = {
    fullName:'',
    email:'',
    cellphone:'',
    role:'',
    status:''
  }

  edit() {
    this.ngservice.start();
    var data={ 
      'role':this.editUser.role,
      'status':this.editUser.status
    }
   
    this.userService.editUser(data, this.activatedRoute.snapshot.params['id']).subscribe(
      (response: any) => {
        this.ngservice.stop();
        this.route.navigate(['/users/show'])
      }
    );
    
  }
  

  ngOnInit() {
    this.ngservice.start()
   this.userService.getProfile(this.userID).subscribe((response:any)=>{
    this.ngservice.stop()
    this.editUser.cellphone=response.data[0].cellphone,
    this.editUser.email=response.data[0].email,
    this.editUser.fullName=response.data[0].name+' '+response.data[0].surname,
    this.editUser.role=response.data[0].role,
    this.editUser.status=response.data[0].status
   
   })
  }
}
