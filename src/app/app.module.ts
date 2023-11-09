import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgxUiLoaderConfig,NgxUiLoaderModule,SPINNER,PB_DIRECTION}from 'ngx-ui-loader';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './services/auth.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';

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
    AppComponent,
    NotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    BrowserAnimationsModule,
    MatSnackBarModule
   
    
 
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
