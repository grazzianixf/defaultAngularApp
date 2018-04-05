import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../providers/auth.service'

@Component({
  selector: 'app-headere',
  templateUrl: './headere.component.html',
  styleUrls: ['./headere.component.css']
})
export class HeadereComponent implements OnInit {

  @Input() isLoggedIn: Boolean;
  @Input() userDisplayName: String;
  @Input() userEmail: String;

  constructor(public authService: AuthService, private router: Router) {

  }   

  ngOnInit() {
    
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }  

}
