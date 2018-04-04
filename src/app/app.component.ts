import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  /*title = 'app';

  user: Observable<firebase.User>;
  items: AngularFireList<Message>;
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list<Message>('/messages');

    this.user = this.afAuth.authState;
    console.log('FirebaseAuth');
    console.log(this.afAuth.auth);
    console.log('currentUser');
    console.log(this.afAuth.auth.currentUser);    
  }  

  login() {
    this.afAuth.auth.signInWithEmailAndPassword("grazzianixf@gmail.com", "testes");
    this.afAuth.auth.onAuthStateChanged(function(algo) {
      console.log('mudança');
      console.log(algo);
    });
  }

  logout() {
      this.afAuth.auth.signOut();
  }

  Send(desc: string) {
      this.items.push({ message: desc});
      this.msgVal = '';
  }*/  

  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public authService: AuthService, private router: Router) {
    console.log('AppComponent constructor');

    this.authService.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.displayName
          this.user_email = auth.email
          console.log("Logged in");
          console.log(auth);
          this.router.navigate(['']);
        }
      }
    );
  }  
}
