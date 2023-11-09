import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { GetCategoryComponent } from './get-category/get-category.component';
import { CategoryComponent } from './category.component';
import { AuthenticationGuard } from '../services/authentication.guard';

const routes: Routes = 
[
  { 
    path: '',
     component:ShowCategoryComponent,
     canActivate:[AuthenticationGuard]
  },
  {
    path:'add-category',
    component:AddCategoryComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path:'del-category/:id',
    component:ShowCategoryComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path:'update-category/:id',
    component:UpdateCategoryComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path:'get-category/:id',
    component:GetCategoryComponent,
    canActivate:[AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
