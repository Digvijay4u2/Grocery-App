import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messagesource = new BehaviorSubject<any>(0);
 cMessage=this.messagesource.asObservable();
  private BASE_URL = 'http://apolis-grocery.herokuapp.com/api'

 mess:number=0;
  
  changeMessage(message : number)
  {
    this.messagesource.next(message);
  }

  constructor(private http : HttpClient) {

   }

   setMessage(data:number)
   {
    this.mess=data;
   }

   getMessage()
   {
    return this.mess;
   }

   getCategory() : Observable<any>
   {
    return this.http.get<any>(`${this.BASE_URL}/category`)
   }

   getSubCategoryByCatId(catId:any): Observable<any>
   {
    return this.http.get<any>(`${this.BASE_URL}/subcategory/${catId}`)
   }

   getProductsByCatId(catId:any): Observable<any>
   {
    return this.http.get<any>(`${this.BASE_URL}/products/cat/${catId}`)
   }

   getProductById(id:any):Observable<any>
   {
    return this.http.get<any>(`${this.BASE_URL}/products/${id}`)
   }

   getProductsBySubId(subId:any): Observable<any>
   {
    return this.http.get<any>(`${this.BASE_URL}/products/sub/${subId}`)
   }
}
