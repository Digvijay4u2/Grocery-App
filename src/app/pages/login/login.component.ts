import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, MinLengthValidator } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private auth: AuthService,private router:Router) { }

  loginClass = '';
  loginResponse = '';

  loginform = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]]

  })

  get email() {
    return this.loginform.get('email');
  }
  get password() {
    return this.loginform.get('password');
  }

  ngOnInit(): void {
  }

  onSubmitHandler() {
    this.auth.login(this.loginform.value).subscribe((res: any) => {
      this.loginClass = "alert-success";
      this.loginResponse = "Login is successFull, Welcome"
      localStorage.setItem('token',res.token);
      localStorage.setItem('token',JSON.stringify(res.user))
      this.router.navigateByUrl('home');
    },
      (error: any) => {
        this.loginClass = "alert-danger";
        this.loginResponse = "Login failed, try again"
      })
  }

}
