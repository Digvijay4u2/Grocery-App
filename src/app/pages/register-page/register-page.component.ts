import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  user = new User();

  
  

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
  onFormSubmit()
  {
    // console.log(this.user);
    this.auth.login(this.user).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
