import { HttpClient} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService implements OnInit {

  constructor(private client:HttpClient) { }

  ngOnInit(): void {
      
  }

  getDetails(){
    const url='http://localhost:5000/dashboard/'
    return this.client.get(url)
  }
}
