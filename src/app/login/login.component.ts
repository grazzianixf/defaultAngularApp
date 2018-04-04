import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router:Router) {
    console.log('LoginComponent.constructor');
  }

  ngOnInit() {
  }

  login() {
    console.log('LoginComponent.login');
    return this.authService.loginWithEmailPassword();
  }

}
