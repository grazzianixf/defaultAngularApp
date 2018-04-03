import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDnRblLt04UPvU9lvz8QfEU4HGKfPJd-tY",
  authDomain: "tmc-firebase-1f3c5.firebaseapp.com",
  databaseURL: "https://tmc-firebase-1f3c5.firebaseio.com",
  storageBucket: "tmc-firebase-1f3c5.appspot.com",
  messagingSenderId: "319435978367"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
