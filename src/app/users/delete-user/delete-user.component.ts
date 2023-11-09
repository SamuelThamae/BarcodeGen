import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  
  constructor(private activatedRoute:ActivatedRoute, private service:UserService, private route:Router, private ngService:NgxUiLoaderService){}
  email:any=this.activatedRoute.snapshot.params['email']
  ngOnInit(): void {
    
    this.service.deleteUser(this.email).subscribe();
    this.route.navigate(['show'])
  }
}
