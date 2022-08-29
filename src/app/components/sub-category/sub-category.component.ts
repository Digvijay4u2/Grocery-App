import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {ActivatedRoute,Router} from '@angular/router'


@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  catId:any;
  
  subCategories : any[] = [];

  

  constructor(private data : DataService,private activateRoute:ActivatedRoute,private router:Router) {
    this.catId=this.activateRoute.snapshot.paramMap.get('catId');

    this.data.getSubCategoryByCatId(this.catId).subscribe((response:any)=>
    {
      this.subCategories=response.data;
    })
   }

  ngOnInit() {
    // this.data.cMessage.subscribe(Id=>this.catId=Id)
    // this.catId=this.data.getMessage();

  }
  onClickHandle(subCategory : any)
  {
    this.router.navigate(['subProduct', subCategory.subId]);
    // alert("this is "+ subCategory.subName);
  }

}
