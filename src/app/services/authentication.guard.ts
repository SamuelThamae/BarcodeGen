import { ConstantPool } from '@angular/compiler';
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  
  constructor(private router:Router,private auth:AuthService ){}
  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      
    const token:any = localStorage.getItem('token')
    if(token){
        
        return true;

    }
    else{
       this.router.navigate([''])
      return false;
    }
  
  }
  
}


