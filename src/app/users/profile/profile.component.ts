import { Component ,OnInit} from '@angular/core';
import { UsersComponent } from '../users.component';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId=0
  constructor(private userService:UsersComponent,private route:ActivatedRoute,private ngService:NgxUiLoaderService){}
  ngOnInit(): void {
      this.route.params.subscribe((response:any)=>{
       // this.ngService.start();
        this.userId=response['id']
      })
  }
}
