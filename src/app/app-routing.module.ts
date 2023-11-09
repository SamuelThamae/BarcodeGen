import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { AppComponent } from './app.component';
import { AuthenticationGuard } from './services/authentication.guard';
import { HasRoleGuard } from './services/has-role.guard';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = 
[
  {path:'',component:LoginComponent
  },
 
{
   path: 'barcodes',
   loadChildren: () => import('./barcodes/barcodes.module').then(m => m.BarcodesModule),

  },
{ 
  path: 'users',
  loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  canActivate:[AuthenticationGuard],
  
},
{ 
  path: 'category',
  loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) ,
  canActivate:[AuthenticationGuard,HasRoleGuard],
  data:{
    role:'admin'
  }
 
},
{ path: 'contactus', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) 

},
{ path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
{ path: 'dashboard',
 loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
 canActivate:[AuthenticationGuard,HasRoleGuard],
 data:{
   role:'admin'
 }

 },
{ 
  path: 'home',
 loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
 canActivate:[AuthenticationGuard]
},
 {
    path:'**',component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
