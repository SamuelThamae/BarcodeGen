import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarcodesComponent } from './barcodes.component';
import { GetBarcodesComponent } from './get-barcodes/get-barcodes.component';
import { UpdateBarcodeComponent } from './update-barcode/update-barcode.component';
import { CreateBarcodeComponent } from './create-barcode/create-barcode.component';
import { GetBarcodeComponent } from './get-barcode/get-barcode.component';
import { AllBarcodesComponent } from './all-barcodes/all-barcodes.component';
import { AuthenticationGuard } from '../services/authentication.guard';




const routes: Routes = [
  { 
  path: '', component: GetBarcodesComponent 
  },
  {
    path:'index',component:AllBarcodesComponent,
    canActivate:[AuthenticationGuard]
  },
  
  { 
    path: 'getBarcodes/:id', component:GetBarcodeComponent,
    canActivate:[AuthenticationGuard]
  },
  { 
    path: 'updateBarcodes/:id', component: UpdateBarcodeComponent,
    canActivate:[AuthenticationGuard]
  },
  { 
    path: 'deleteBarcodes/:id', component:AllBarcodesComponent,
    canActivate:[AuthenticationGuard]
  },
  {path:'addBarcode',component:CreateBarcodeComponent,
  canActivate:[AuthenticationGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarcodesRoutingModule { }
