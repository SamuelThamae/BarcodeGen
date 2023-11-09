import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { BarcodesRoutingModule } from './barcodes-routing.module';
import { BarcodesComponent } from './barcodes.component';
import { GetBarcodeComponent } from './get-barcode/get-barcode.component';
import { GetBarcodesComponent } from './get-barcodes/get-barcodes.component';
import { UpdateBarcodeComponent } from './update-barcode/update-barcode.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxUiLoaderConfig,NgxUiLoaderModule,SPINNER,PB_DIRECTION}from 'ngx-ui-loader';
import { CreateBarcodeComponent } from './create-barcode/create-barcode.component';
import { AllBarcodesComponent } from './all-barcodes/all-barcodes.component';

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
    BarcodesComponent,
    CreateBarcodeComponent,
    GetBarcodeComponent,
    GetBarcodesComponent,
    UpdateBarcodeComponent,
    AllBarcodesComponent
  ],
  imports: [
    CommonModule,
    BarcodesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   
  ]
 
})
export class BarcodesModule { }
