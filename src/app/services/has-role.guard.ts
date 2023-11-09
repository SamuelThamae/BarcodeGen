import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UserModel } from './user-model';
import { inject } from '@angular/core/testing';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {
  
  currntUser={
    role:'',
    fullName:'',
    email:'',
    id:''


   }
  constructor(private auth:AuthService, private router:Router){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      const token =localStorage.getItem('token')
    if(token)
    {
      const decodedJwt:any= jwtDecode(token);
      this.currntUser.role = decodedJwt.role
      if(this.currntUser.role === route.data['role']){

        return true
      }else{
        alert("Access not granted")
        this.router.navigate(['home'])
         return false
      }
     
    }else{
      return false
    }
      
   
      
      

  }
  
}
