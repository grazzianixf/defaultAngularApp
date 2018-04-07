import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../providers/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isLoggedIn: Boolean;
  @Input() userDisplayName: String;
  @Input() userEmail: String;

  constructor(public authService: AuthService, private router: Router) {

  }   

  ngOnInit() {
    
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
    this.authService.logout();
    this.router.navigate(['login']);
  }  

}
