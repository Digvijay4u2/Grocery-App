import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 catId:any;
  products : any[] =[];
  constructor(private data: DataService,private activateRoute:ActivatedRoute) {
    this.catId=this.activateRoute.snapshot.paramMap.get('catId');

    this.data.getProductsByCatId(this.catId).subscribe((response :any)=>
    {
      this.products=response.data;
    })
   }

  ngOnInit() {
    // this.data.cMessage.subscribe(Id=>this.catId=Id)
    // this.catId=this.data.getMessage();
  }

}
