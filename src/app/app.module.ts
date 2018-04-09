import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';

import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { LayoutModule } from './layout/layout.module';
import { FirebaseModule } from './firebase/firebase.module';
import { TodoModule } from './todo/todo.module';
import { UiModule } from './ui/ui.module';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FirebaseModule,
    LayoutModule,
    TodoModule,
    UiModule,
    NoopAnimationsModule, 
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
