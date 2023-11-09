import { Component, OnInit } from '@angular/core';

import{CategoryService}from '../../services/category.service'
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';


@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {
  catList:any
  constructor(
    private service:CategoryService,
    private ngservice:NgxUiLoaderService,
    private snackbar:SnackbarService
    ) {}
  category={
    id:'',
    name:''
  }
  deleteItem(id:any){
    this.ngservice.start()
    this.service.deleteCategory(id).subscribe((response:any)=>{
this.snackbar.openSnackBar(response.message,"")
      this.ngservice.stop()
      
    })
  }
  ngOnInit(): void {
   this.service.showCategories().subscribe((response)=>{
   
   this.category.id=response.data.map((data:any)=>data.id),
   this.category.name=response.data.map((data:any)=>data.name)
   
  
    this.catList=response.data
   })
  }
}
