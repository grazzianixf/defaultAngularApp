import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoComponent } from './todo.component';
import { UiModule } from './../ui/ui.module';

@NgModule({
  imports: [
    CommonModule, UiModule
  ],
  declarations: [ TodoComponent ],
  exports: [ TodoComponent ]
})
export class TodoModule { }
