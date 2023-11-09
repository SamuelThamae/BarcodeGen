import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { GetContatUsComponent } from './get-contact-us/get-contact-us.component';
import { PostContactUsComponent } from './post-contact-us/post-contact-us.component';
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
    ContactUsComponent,
    GetContatUsComponent,
    PostContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   
  ]
})
export class ContactUsModule { }
