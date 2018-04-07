import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDesignModule } from './material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule, MaterialDesignModule
  ],
  declarations: [],
  exports: [ MaterialDesignModule ]
})
export class UiModule { }
