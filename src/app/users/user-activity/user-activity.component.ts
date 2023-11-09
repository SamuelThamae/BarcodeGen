import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.css']
})
export class UserActivityComponent implements OnInit {
id:any;
actData:any[]=[]
constructor(private service:UserService,private route:ActivatedRoute, private ngserice:NgxUiLoaderService){}
  
ngOnInit(): void {
    this.ngserice.start();
    this.id=this.route.snapshot.params['id'];
    this.service.getActivities(this.id).subscribe((response:any)=>{
      this.ngserice.stop();
      this.actData=response.data
      
    })
}
}
