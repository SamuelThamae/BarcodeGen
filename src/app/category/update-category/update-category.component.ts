import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CategoryService } from 'src/app/services/category.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  categoryId:any;
  category:any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private ngService:NgxUiLoaderService,
    private router:Router,
    private snackbar:SnackbarService,
    private service:CategoryService){}
  
  ngOnInit(): void {

   this.categoryId=this.activatedRoute.snapshot.params['id'];
   this.ngService.start()
    this.service.getCategory(this.categoryId).subscribe(response=>{
      this.ngService.stop()
      this.category=response
    })
  }
  updateCat=new FormGroup({
      'name':new FormControl('',[Validators.required])
  })
update(){
  var data={
    'name':this.updateCat.value.name
  }
  this.ngService.start();
  this.service.updateCategory(data,this.categoryId).subscribe(response=>{
    this.ngService.stop()
    this.router.navigate(['category/'])
    this.snackbar.openSnackBar(response.message,"")
  })
}

}
