import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BarcodeService } from 'src/app/services/barcode.service';

@Component({
  selector: 'app-get-barcode',
  templateUrl: './get-barcode.component.html',
  styleUrls: ['./get-barcode.component.css']
})
export class GetBarcodeComponent  implements OnInit{
  barcode:any[]=[];
  constructor(private activatedRoute:ActivatedRoute,private barcodeService:BarcodeService,private ngservice:NgxUiLoaderService){}
  ngOnInit(): void {
    
  
    this.ngservice.start()
    this.barcodeService.getBarcode(this.activatedRoute.snapshot.params['id']).subscribe((data:any)=>{
      this.ngservice.stop()
      this.barcode=data.result
      console.log(this.barcode)
    })

  }
}
