import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

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

  login(email, password) {
    console.log('LoginComponent.login');
    this.authService.loginWithEmailPassword(email, password);
    console.log('feito o login');

    this.authService.afAuth.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.router.navigate(['/']);
        }
      }
    );
  }

  onSubmit(formData) {
    if(formData.valid) {
      return this.login(formData.value.email, formData.value.password);
    }
  }
}
