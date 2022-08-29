import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router'; '@angular/router'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public id:any;

  product :any;

  constructor(private data:DataService,private activateRoute:ActivatedRoute) {

    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.data.getProductById(this.id).subscribe((response:any)=>{
      console.log(response.data);
        this.product=response.data;
    })
   }

  ngOnInit(): void {
  }

}
