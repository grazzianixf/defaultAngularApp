import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../providers/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  /*
  constructor(public authService: AuthService, private router:Router) {
    console.log('HeaderComponent constructor');
  }
  */

  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public authService: AuthService, private router: Router) {
    console.log('HeaderComponent constructor');

    this.authService.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.displayName
          this.user_email = auth.email
        }
      }
    );
  }   

  ngOnInit() {}


}
