import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor (private router: Router){}
  UsernameInput:any = "";
  PasswordInput:any = "";

  Submit(username:any, password:any){
    if(username === "admin"){
      this.router.navigate(['/dashboard'])
    }else if(username === "agent"){
      this.router.navigate(['/home'])
    }else{
      alert("wrong credentials");
    }
  }
}
