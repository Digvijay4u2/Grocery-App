import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-sub-product',
  templateUrl: './sub-product.component.html',
  styleUrls: ['./sub-product.component.css']
})
export class SubProductComponent implements OnInit {

  subId:any;
  subProduct : any[] = [];

  

  constructor(private data : DataService,private activateRoute:ActivatedRoute) {
    this.subId=this.activateRoute.snapshot.paramMap.get('subId');

    this.data.getProductsBySubId(this.subId).subscribe((response:any)=>
    {
      this.subProduct=response.data;
    })
   }

  ngOnInit() {
    // this.data.cMessage.subscribe(Id=>this.catId=Id)
    // this.catId=this.data.getMessage();

  }

}
