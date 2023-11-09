import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarcodeService  {

  constructor( private httpClient:HttpClient) { }


  createBarcode(barcodeBody:any):Observable<any>{
    const barcodeUrl='http://localhost:5000/barcodes/';
    return this.httpClient.post(barcodeUrl,barcodeBody)
  }

  showBarcodes():Observable<any>{
    const barcodeUrl='http://localhost:5000/barcodes/';
    return this.httpClient.get(barcodeUrl)
  }
  getBarcode(id:any):Observable<any>
  {
    const barcodeUrl='http://localhost:5000/barcodes/'+id;
   return this.httpClient.get(barcodeUrl)
  }

  updateBarcode(barcodeBody:any,id:any):Observable<any>
  {
    const barcodeUrl='http://localhost:5000/barcodes/'+id;
    return this.httpClient.put(barcodeUrl,barcodeBody)
  }

  deleteBarcode(id:any){
    const barcodeUrl='http://localhost:5000/barcodes/'+id;
    return this.httpClient.delete(barcodeUrl)
  }
}
