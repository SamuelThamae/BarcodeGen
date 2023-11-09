import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DashboardService } from '../services/dashboard.service';
import { CategoryService } from '../services/category.service';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
data:any;
catList:any[]=[];
approval:any[]=[]

userDetails=new FormGroup({
  email:new FormControl(''),
  status:new FormControl('')
})

changeStatus()
{
  var data=({
    'status':this.userDetails.value.status,
  })
}
  constructor(public authService:AuthService,
    private ngservice:NgxUiLoaderService, private catService:CategoryService,private userService:UserService, private dashboard:DashboardService){}

  
  
  ngOnInit(): void {
    this.dashboard.getDetails().subscribe((result:any)=>{
      this.data=result.result
    
    })
    this.catService.showCategories().subscribe((res:any)=>{
      this.catList=res.data
      
    })

    

    this.userService.approveUsers().subscribe((response:any)=>{
      this.approval=response.result
      console.log(this.approval)
     
    })
}
}
