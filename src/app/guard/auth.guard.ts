import { Injectable } from '@angular/core';
import { Router,CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private auth:AuthService,private router : Router)
{

}

  canActivate() : boolean
  {
    if(this.auth.checkToken())
    {
      return true;
    }
    else{
      this.router.navigateByUrl('login');
      return false;
    }
  }
    
  
  
}
