import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { GetCategoryComponent } from './get-category/get-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import {NgxUiLoaderConfig,NgxUiLoaderModule,SPINNER,PB_DIRECTION}from 'ngx-ui-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ngxUiLoaderConfig:NgxUiLoaderConfig={
  pbColor:"yellow",
  bgsColor:"blue",
  fgsColor:"yellow",
  fgsType:SPINNER.threeStrings,
  fgsSize:110,
  pbDirection:PB_DIRECTION.leftToRight,
  pbThickness:6,
  hasProgressBar: false
}

@NgModule({
  declarations: [
    CategoryComponent,
    AddCategoryComponent,
    GetCategoryComponent,
    UpdateCategoryComponent,
    ShowCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class CategoryModule { }
