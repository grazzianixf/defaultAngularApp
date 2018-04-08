import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { JwtHelperService } from '@auth0/angular-jwt';

export class User {
  name : String;
  email : String;
  picture : String;
}

@Injectable()
export class AuthService {

  private LOCAL_STORAGE_TOKEN_NAME = 'idToken';

  constructor(public afAuth: AngularFireAuth) {
    console.log('AuthService constructor');
  }

  public loginWithEmailPassword(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
    
    this.afAuth.authState.subscribe(
      (auth) => {
        if (auth) {
          auth.getIdToken().then(
            (idToken) => {
              //let idTokenJwt = this.getJwtHelper().urlBase64Decode(idToken);
              localStorage.setItem("idToken", idToken);
            }
          );
        }
      }
    );
  }

  public logout() {
    return this.afAuth.auth.signOut();
  }  

  public isAuthenticated(): boolean {
    this.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          this.executeLoggedOutProcedures();
        }
      }
    );

    return ! this.getJwtHelper().isTokenExpired(this.getTokenFromLocalStorage());
  } 

  getCurrentUser() {
    if (this.isAuthenticated()) {
      
      let tokenObject = this.getJwtHelper().decodeToken(this.getTokenFromLocalStorage());
      if (tokenObject) {
        let user : User = new User();
        user.name = tokenObject.name;
        user.email = tokenObject.email;
        user.picture = tokenObject.picture;

        return user;
      }

      return null;
    }
    return null;
  }

  private executeLoggedOutProcedures() {
    localStorage.removeItem(this.LOCAL_STORAGE_TOKEN_NAME);
  }

  getJwtHelper() : JwtHelperService {
    let jwtHelperService: JwtHelperService = new JwtHelperService();

    return jwtHelperService;
  }

  private getTokenFromLocalStorage() {
    return localStorage.getItem(this.LOCAL_STORAGE_TOKEN_NAME);
  }
}
