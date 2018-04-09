import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users/users.component';

import { UiModule } from './../ui/ui.module';

import {CdkTableModule} from '@angular/cdk/table'; //FIXME remover se for o caso, apenas um teste

@NgModule({
  imports: [
    CommonModule, UiModule, CdkTableModule
  ],
  declarations: [UsersComponent]
})
export class AdminModule { }
