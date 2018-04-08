import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth/auth-guard.service';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate : [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'todo', component: TodoComponent, canActivate : [AuthGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)  
  ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
