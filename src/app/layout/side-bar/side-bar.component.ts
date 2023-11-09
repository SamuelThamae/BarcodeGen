import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{

  constructor(private router:Router,private ngservice:NgxUiLoaderService, public auth:AuthService){}

  logout(){
    localStorage.clear();
    this.router.navigate([''])
  }
ngOnInit(): void {
    
}
  
  
}
