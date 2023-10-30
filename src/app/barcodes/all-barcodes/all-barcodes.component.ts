import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BarcodeService } from 'src/app/services/barcode.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-all-barcodes',
  templateUrl: './all-barcodes.component.html',
  styleUrls: ['./all-barcodes.component.css']
})
export class AllBarcodesComponent {

  barcodes:any[]=[];
  allBarcode={
    barcode:'',
    itemName:'',
    website:'',
    email:'',
    user:'',
    helpLine:'',
    category:'',
    purpose:'',
    manufacture:'',
    dateCreated:''
  }
  
    

  constructor(
    private service:BarcodeService,
    private route:Router,
    private ngservice:NgxUiLoaderService,
    private snackbar:SnackbarService
    ){}

    delete(id:any){
      this.ngservice.start()
      this.service.deleteBarcode(id).subscribe((response:any)=>{
       
        this.snackbar.openSnackBar(response.message,"")
        this.ngservice.stop()
      })
    }
    ngOnInit(): void {
      this.ngservice.start()
      this.service.showBarcodes().subscribe((response:any)=>{
        this.ngservice.stop()
        this.allBarcode.email=response.result[0].email,
        this.allBarcode.barcode=response.result[0].barcode,
        this.allBarcode.itemName=response.result[0].itemName,
        this.allBarcode.manufacture=response.result[0].manufactureName,
        this.allBarcode.website=response.result[0].website,
        this.allBarcode.helpLine=response.result[0].helpLine,
        this.allBarcode.user=response.result[0].userID,
        this.allBarcode.purpose=response.result[0].purpose,
        this.allBarcode.category=response.result[0].category,
        this.allBarcode.dateCreated=response.result[0].dateCreated.substr(0,10)
        this.barcodes=response.result
        
        
        
       
      })
    }
}
