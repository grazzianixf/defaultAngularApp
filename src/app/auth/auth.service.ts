import { Injectable, Output, EventEmitter } from '@angular/core';

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
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        (auth) => {
          if (auth) {            
            auth.getIdToken().then(
              (idToken) => {
                //let idTokenJwt = this.getJwtHelper().urlBase64Decode(idToken);
                localStorage.setItem("idToken", idToken);
                this.getLoggedInOut.emit({ 'code' : 'login' });
              }
            );
          }
        }
      ).catch(
        (error) => {
          this.getLoggedInOut.emit(error);
      })
  }
  
  private executeLogoutProcedures() {
    localStorage.removeItem(this.LOCAL_STORAGE_TOKEN_NAME);
  }

  public logout() {
    console.log('logout');

    this.executeLogoutProcedures();

    let result = this.afAuth.auth.signOut();
    this.getLoggedInOut.emit({ 'code' : 'logout' });

    return result;
  }  

  public isAuthenticated(): boolean {
    console.log('AuthService.isAuthenticated');
    this.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          this.executeLogoutProcedures();
        }
      }
    );

    let isTokenExpired = this.getJwtHelper().isTokenExpired(this.getTokenFromLocalStorage());
    console.log('isTokenExpired: ' + isTokenExpired);

    return ! isTokenExpired;
  } 

  public getCurrentUser() {
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


  public getJwtHelper() : JwtHelperService {
    let jwtHelperService: JwtHelperService = new JwtHelperService();

    return jwtHelperService;
  }

  private getTokenFromLocalStorage() {
    console.log('AuthService.getTokenFromLocalStorage');

    let token = localStorage.getItem(this.LOCAL_STORAGE_TOKEN_NAME);

    return token;
  }

  @Output() public getLoggedInOut: EventEmitter<any> = new EventEmitter();
}
