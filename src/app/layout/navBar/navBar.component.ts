import {Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
@Component({
    selector:'app-navBar',
    templateUrl:'./navBar.component.html',
    styleUrls:['./navBar.component.css']
})

export class NavbarComponent implements OnInit {
    
    constructor(public authService:AuthService,private userService:UserService,private router:Router){
       
    }
    logout(){
        localStorage.clear();
        this.router.navigate([''])
      }
    ngOnInit(): void {

     
    }
}


