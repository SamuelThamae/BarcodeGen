import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  allUsers:any[]=[];
constructor(private service:UserService,private ngxService:NgxUiLoaderService,private route:Router){}

 deleteUser(id:any){
    this.service.deleteUser(id).subscribe((response:any)=>{
      console.log(response)
    });
 }
  ngOnInit(): void {
    this.ngxService.start()
    this.service.getAllUsers().subscribe((response:any)=>{
      console.log(response.data)
      this.ngxService.stop()
      this.allUsers=response.data  
    })
  }
}
