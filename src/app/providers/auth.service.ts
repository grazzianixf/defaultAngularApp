import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {
    console.log('AuthService constructor');
  }

  loginWithEmailPassword() {
    this.afAuth.auth.signInWithEmailAndPassword("grazzianixf@gmail.com", "testes");
  }

  logout() {
    return this.afAuth.auth.signOut();
  }  

  getAuthState() {
    return this.afAuth.authState;
  }
}
