import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './../providers/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    console.log('AuthGuardService.canActivate');
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      console.log('AuthGuardService.canActivate = false');
      return false;
    }
    console.log('AuthGuardService.canActivate = true');
    return true;
  }
}