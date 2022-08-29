import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  private Base_URL = 'http://apolis-grocery.herokuapp.com/api/auth';

  register(data:any) : Observable<any>
  {
    return this.http.post<any>(`${this.Base_URL}/register`,data);
  }
  login(data:any) : Observable<any>
  {
    return this.http.post<any>(`${this.Base_URL}/login`,data);
  }

  checkToken()
  {
    if(localStorage.getItem('token'))
    {
      return true;
    }
    else
    return false
  }

  logout()
  {
    localStorage.clear();
  }

}
