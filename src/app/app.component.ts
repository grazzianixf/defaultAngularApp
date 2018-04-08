import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private isLoggedIn: Boolean;
  private userDisplayName: String;
  private userEmail: String;

  constructor(private activatedRoute: ActivatedRoute) {
    console.log('AppComponent constructor');

    /*
    if (activatedRoute.snapshot.firstChild.url.length == 0
      || activatedRoute.snapshot.firstChild.url[0].path == "login") {

    }
    */
  }

}
