import { Injectable } from '@angular/core';

import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class CategoryService  {

  constructor(private client:HttpClient , private userService:UserService) {
   
   }
   
  addCategory(categorybody:any):Observable<any>{
    const categoryUrl='http://localhost:5000/category/';
    return this.client.post(categoryUrl,categorybody)

  }

  showCategories():Observable<any>{
    const categoryUrl = 'http://localhost:5000/category/';
    return this.client.get(categoryUrl)
  }

  getCategory(categoryId:any):Observable<any>{
    const categoryUrl='http://localhost:5000/category/'+categoryId;
    return this.client.get(categoryUrl)
  }

  updateCategory(categorybody:any,categoryId:any):Observable<any>{
    const categoryUrl='http://localhost:5000/category/'+categoryId;
    return this.client.put(categoryUrl,categorybody)
  }

  deleteCategory(categoryId:any):Observable<any>{
    const categoryUrl='http://localhost:5000/category/'+categoryId;
    return this.client.delete(categoryUrl)
  }

}