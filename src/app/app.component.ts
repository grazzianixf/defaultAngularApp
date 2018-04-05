import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './providers/auth.service';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private isLoggedIn: Boolean;
  private userDisplayName: String;
  private userEmail: String;  

  constructor(public authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    console.log('AppComponent constructor');

    this.authService.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");

          this.isLoggedIn = false;
          this.userDisplayName = '';
          this.userEmail = '';

          this.router.navigate(['login']);
        } else {
          console.log("Logged in");
          console.log(auth);

          this.isLoggedIn = true;
          this.userDisplayName = auth.displayName;
          this.userEmail = auth.email;   
          
          console.log(this.userDisplayName + "(" + this.userEmail + ")");

          if (activatedRoute.snapshot.firstChild.url.length == 0
                || activatedRoute.snapshot.firstChild.url[0].path == "login") {
            this.router.navigate(['']);
          }
          
        }

      }
    );
  }  
}
