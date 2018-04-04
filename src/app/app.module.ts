import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AuthService } from './providers/auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDnRblLt04UPvU9lvz8QfEU4HGKfPJd-tY",
  authDomain: "tmc-firebase-1f3c5.firebaseapp.com",
  databaseURL: "https://tmc-firebase-1f3c5.firebaseio.com",
  storageBucket: "tmc-firebase-1f3c5.appspot.com",
  messagingSenderId: "319435978367"
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    LayoutModule 
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
