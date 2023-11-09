import { Injectable } from '@angular/core';

import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private client:HttpClient) { 
     const token:any = localStorage.getItem('token')

   
  }
 

  register(userbody:any):Observable<any>{
    const userUrl='http://localhost:5000/users/register/';
    return this.client.post(userUrl,userbody)
  }

  updateStatus(data:any):Observable<any>{
    const userUrl='http://localhost:5000/users/updateStatus/'
    return this.client.put(userUrl,data)
  }

  getAllUsers():Observable<any>{
    const userUrl='http://localhost:5000/users/'; 
    return this.client.get(userUrl);
  }

  getActivities(id:any):Observable<any>{
    const userUrl='http://localhost:5000/users/activities/'+id
    return this.client.get(userUrl)
  }
  forgetPassword(data:any){
    const userUrl='http://localhost:5000/users/forgotPassword/'
    return this.client.post(userUrl,data)
  }
  approveUsers():Observable<any>{
    const userUrl='http://localhost:5000/dashboard/status/'
    return this.client.get(userUrl)
  }
  getProfile(id:any):Observable<any>{
    const userUrl='http://localhost:5000/users/'+id
    return this.client.get(userUrl)
  }
  login(data:any){
    const loginUrl='http://localhost:5000/users/login';
   return this.client.post(loginUrl,data)
  }
  editUser(userbody:any,id:any):Observable<any>{
    const userUrl='http://localhost:5000/users/'+id
    return this.client.put(userUrl,userbody)
  }
  deleteUser(id:any):Observable<any>{
   
    const userUrl='http://localhost:5000/users/'+id
    return this.client.delete(userUrl)
  }

  checkToken(){
    const userUrl='http://localhost:5000/users/checkToken'
    return this.client.get(userUrl)
  }
}
