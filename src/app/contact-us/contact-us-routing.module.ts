import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetContatUsComponent } from './get-contact-us/get-contact-us.component';
import { PostContactUsComponent } from './post-contact-us/post-contact-us.component';
import { AuthenticationGuard } from '../services/authentication.guard';


const routes: Routes = [
  { path: '', component:PostContactUsComponent },
  {
    path:'mail',
    component:GetContatUsComponent,
    canActivate:[AuthenticationGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
