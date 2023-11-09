import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CategoryService } from 'src/app/services/category.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  constructor(
    private service:CategoryService,
    private ngservice:NgxUiLoaderService,
    private snackbar:SnackbarService,
    private router:Router){}

  addCat=new FormGroup({
      'name':new FormControl('',[Validators.required])
  })

  createCat(){
  this.ngservice.start();
    var data={
      'name':this.addCat.value.name
    }
    this.service.addCategory(data).subscribe((response:any)=>{
      this.ngservice.stop()
      this.snackbar.openSnackBar(response.result,"")
     this.router.navigate(['category/'])
    })

  }
}
