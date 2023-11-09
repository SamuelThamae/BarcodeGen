import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';
import { UserModel } from './user-model';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private _isLoggedIn$=new BehaviorSubject<boolean>(false)
    public isLoggedIn$=this._isLoggedIn$.asObservable();
    private _isAdmin$=new BehaviorSubject<boolean>(false);
    public isAdmin$=this._isAdmin$.asObservable()
   currntUser={
    role:'',
    fullName:'',
    email:'',
    id:''


   }



  constructor(
    private service: UserService,
     private router: Router) 
     {
      const token = localStorage.getItem('token')
      this._isLoggedIn$.next(!!token)
      
      this._isAdmin$.next(!!this.currntUser.role)
     }

   

login(data:any){
 return this.service.login(data).pipe(
  tap((response:any)=>{
    localStorage.setItem('token',response.token)
    this._isLoggedIn$.next(true); 
    this._isAdmin$.next(true)
    this.getUser(response.token)
    
  })
 )

}

private getUser(myToken:any){
   const decodedJwt:any= jwtDecode(myToken);
   this.currntUser.email = decodedJwt.email;
   this.currntUser.id = decodedJwt.id;
   this.currntUser.fullName = decodedJwt.fullName;
   this.currntUser.role = decodedJwt.role;
   
}
  /*  
token=localStorage.getItem('token')
  userOnline={
    name:'',
    role:'',
    email:'',
    id:''
   }

   
  if(token:any){
    this._isLoggedIn$.next(true)
  }
  

  public userDetail(){
    if (this.token) {
      try {
        const decodedJwt: any = jwtDecode(this.token);
      
        this.userOnline.email = decodedJwt.email;
        this.userOnline.id = decodedJwt.id;
        this.userOnline.name = decodedJwt.fullName;
        this.userOnline.role = decodedJwt.role;
     
      } catch (error) {
        console.error('Error decoding JWT:', error);
      }
    }
  }*/
 
}
