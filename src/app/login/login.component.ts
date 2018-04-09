import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, User } from '../auth/auth.service';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn : boolean = false;
  user : User = null;
  isLogging : boolean = false;

  constructor(public authService: AuthService, private router:Router, public snackBar: MatSnackBar) {
    console.log('LoginComponent.constructor');

    this.isLoggedIn = this.authService.isAuthenticated();

    if (this.isLoggedIn) {
      this.user = this.authService.getCurrentUser();
    } else {
      this.user = null;
    }

    this.authService.getLoggedInOut.subscribe(
      (object) => {
        this.snackBar.dismiss();
        this.isLogging = false;

        if (object && (object.code == 'login' || object.code == 'logout')) {
          this.isLoggedIn = this.authService.isAuthenticated();
  
          if (this.isLoggedIn) {
            console.log(object);
            this.user = this.authService.getCurrentUser();
            this.router.navigate(['/']);
          } else {
            console.log(object);
            this.user = null;
          }
        } else {
          this.snackBar.open(object.message, "DISMISS", {
            verticalPosition : 'top'
          });
          console.log('Auth error: ' + object.code + ' (' + object.message + ')');
        }
      }
    );
  }

  ngOnInit() {
  }

  login(email, password) {
    console.log('LoginComponent.login');
    this.isLogging = true;
    this.authService.loginWithEmailPassword(email, password);          
  }

  onSubmit(formData) {
    if(formData.valid) {
      return this.login(formData.value.email, formData.value.password);
    }
  }
}
