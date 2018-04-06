import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { LayoutModule } from './layout/layout.module';
import { FirebaseModule } from './firebase/firebase.module';
import { TodoComponent } from './todo/todo.component';
import { UiModule } from './ui/ui.module';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'todo', component: TodoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    AboutComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FirebaseModule,
    LayoutModule,
    UiModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
