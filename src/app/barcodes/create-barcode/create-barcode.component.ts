import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalMessages } from 'src/app/gobalMessages/globalMessage';
import jwt_decode from 'jwt-decode'
import { BarcodeService } from 'src/app/services/barcode.service';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-create-barcode',
  templateUrl: './create-barcode.component.html',
  styleUrls: ['./create-barcode.component.css']
})
export class CreateBarcodeComponent implements  OnInit{
  catList:any[]=[];
  userList:any[]=[];
  message:any;
  userId:unknown;
  constructor( private barcodeService:BarcodeService,private userService:UserService,
    private catService:CategoryService,private ngService:NgxUiLoaderService,
    private route:Router){
      const token:any =localStorage.getItem('token')
      if(token)
    {
        var decoded:any=jwt_decode(token)
        this.userId=decoded.id
      console.log(this.userId)
    }
    }

   
  
  createBarcode=new FormGroup({
    'postal':new FormControl('',[Validators.required]),
    'barcodeLine':new FormControl('',[Validators.required]),
    'email':new FormControl('',[Validators.required,Validators.pattern(GlobalMessages.regaxEmail)]),
    'helpLine':new FormControl('',[Validators.required,Validators.pattern(GlobalMessages.regexCellphone)]),
    'website':new FormControl('',[Validators.required]),
    'manufacture':new FormControl('',[Validators.required,Validators.pattern(GlobalMessages.regexName)]),
    'name':new FormControl('',[Validators.required]),
    'category':new FormControl('',[Validators.required]),
    'purpose':new FormControl('',[Validators.required])
  })

 
  
  
  submitBarcode(){
    this.ngService.start();
    
    var data={
      'barcode':this.createBarcode.value.barcodeLine,
      'postal':this.createBarcode.value.postal,
      'manufacture':this.createBarcode.value.manufacture,
      'item':this.createBarcode.value.name,
      'helpLine':this.createBarcode.value.helpLine,
      'purpose':this.createBarcode.value.purpose,
      'id':this.userId,
      'website':this.createBarcode.value.website,
      'email':this.createBarcode.value.email,
      'category':this.createBarcode.value.category
    }
    

  
    this.barcodeService.createBarcode(data).subscribe((data:any)=>{
      this.ngService.stop()
      this.message=data
      this.route.navigate(['home'])

    })
  }
  
  ngOnInit(): void {
    this.catService.showCategories().subscribe((data:any)=>{
      this.catList = data.data.map((category: any) => category.name);
      
    
    })

    this.userService.getAllUsers().subscribe((data:any)=>{
      console.log(data)
    })

  

  }
}
