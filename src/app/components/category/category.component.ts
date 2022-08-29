import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:any[] = [];
  

  constructor(private data:DataService,private router:Router) { 

    this.data.getCategory().subscribe((response:any)=>{
      this.categories=response.data;
    })
    
  }

  ngOnInit() {
   
  }
  onClickHandler(category : any)
  {
    this.router.navigate(['products', category.catId]);
  }
  

}
