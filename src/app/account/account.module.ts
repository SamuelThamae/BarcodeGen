import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgxUiLoaderConfig,NgxUiLoaderModule,SPINNER,PB_DIRECTION}from 'ngx-ui-loader';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

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
    AccountComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  ]
})
export class AccountModule { }
