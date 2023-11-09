import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalMessages } from 'src/app/gobalMessages/globalMessage';
import { BarcodeService } from 'src/app/services/barcode.service';
import { CategoryService } from 'src/app/services/category.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-update-barcode',
  templateUrl: './update-barcode.component.html',
  styleUrls: ['./update-barcode.component.css']
})
export class UpdateBarcodeComponent  implements OnInit{
  barcodeId:number=0;
  catList:any[]=[];
  barcode:any[]=[]
  constructor(
    private activateRoute:ActivatedRoute,
    private categorySevice:CategoryService, 
    private barcodeService:BarcodeService,
    private  snackbar:SnackbarService,
    private ngservice:NgxUiLoaderService){}
 
  updateBarcode ={
    postal:'',
    barcode:'',
    email:'',
    website:'',
    helpLine:'',
    manufactureName:'',
    name:'',
    category:'',
    purpose:''

  }


  updateData(){
    this.ngservice.start()
    var data={
      'category':this.updateBarcode.category,
      'purpose':this.updateBarcode.purpose,
      'itemName':this.updateBarcode.name,
      'manufacture':this.updateBarcode.manufactureName,
      'helpLine':this.updateBarcode.helpLine,
      'website':this.updateBarcode.website,
      'email':this.updateBarcode.email,
      'barcode':this.updateBarcode.barcode,
      'postal':this.updateBarcode.postal
    }

    this.barcodeService.updateBarcode(data,this.barcodeId).subscribe((response:any)=>{
      this.snackbar.openSnackBar(response.message,"")
      this.ngservice.stop()

    })
  }
 
 
 
  ngOnInit(): void {
  

   this.categorySevice.showCategories().subscribe((result:any)=>{
    this.catList = result.data.map((category: any) => category.name);
   
   });

   this.barcodeId=this.activateRoute.snapshot.params['id'];
   this.barcodeService.getBarcode(this.barcodeId).subscribe((data:any)=>{
    this.updateBarcode.postal=data.result[0].postalAddress,
    this.updateBarcode.barcode=data.result[0].barcode,
    this.updateBarcode.email=data.result[0].email,
    this.updateBarcode.website=data.result[0].website,
    this.updateBarcode.helpLine=data.result[0].helpLine,
    this.updateBarcode.manufactureName=data.result[0].manufactureName,
    this.updateBarcode.category=data.result[0].category,
    this.updateBarcode.purpose=data.result[0].purpose,
    this.updateBarcode.name=data.result[0].itemName
    
   })
   
  }
}
