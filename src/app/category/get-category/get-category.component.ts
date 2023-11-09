import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-category',
  templateUrl: './get-category.component.html',
  styleUrls: ['./get-category.component.css']
})
export class GetCategoryComponent  implements OnInit{
  categoryId:number=0
  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.categoryId=+data['id']
    })
  }

}
