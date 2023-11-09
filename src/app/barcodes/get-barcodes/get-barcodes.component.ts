import { Component, OnInit } from '@angular/core';
import { BarcodeService } from '../../services/barcode.service';
import {  Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-get-barcodes',
  templateUrl: './get-barcodes.component.html',
  styleUrls: ['./get-barcodes.component.css']
})
export class GetBarcodesComponent implements OnInit {
 
    barcodes:any[]=[];

    

  constructor(private service:BarcodeService,private route:Router,private ngservice:NgxUiLoaderService){}


    ngOnInit(): void {
      this.ngservice.start()
      this.service.showBarcodes().subscribe((response:any)=>{
        this.ngservice.stop()
        this.barcodes=response.result
        
       
      })
    }
  
}
