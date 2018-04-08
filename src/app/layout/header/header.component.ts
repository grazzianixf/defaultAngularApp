import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: Boolean;
  userDisplayName: String;
  userEmail: String;

  constructor(public authService: AuthService, private router: Router) {
    console.log('HeaderComponent.constructor');

    this.executeLogInOutProcedures();

    this.authService.getLoggedInOut.subscribe(
      (status) => {
        console.log('status: ' + status);
        this.executeLogInOutProcedures();
      }
    );
  }   

  executeLogInOutProcedures() {
    console.log('HeaderComponent.executeLogInOutProcedures');

    if (this.authService.isAuthenticated()) {
      this.isLoggedIn = true;

      let user = this.authService.getCurrentUser();

      this.userDisplayName = user.name;
      this.userEmail = user.email;
    } else {
      this.isLoggedIn = false;
      this.userDisplayName = '';
      this.userEmail = '';
    }    
    console.log('this.isLoggedIn: ' + this.isLoggedIn);
  }

  ngOnInit() {
    console.log('HeaderComponent.nbOnInit');
  }

  home() {
    this.router.navigate(['/']);
  }

  todo() {
    this.router.navigate(['/todo']);
  }  

  about() {
    this.router.navigate(['/about']);
  }  

  logout() {
    this.isLoggedIn = false;
    this.userDisplayName = '';
    this.userEmail = '';

    this.authService.logout();
    this.router.navigate(['login']);
  }

}
