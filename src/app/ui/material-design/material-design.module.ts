import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatMenuModule
  ],
  declarations: [],
  exports: [ MatMenuModule ]
})
export class MaterialDesignModule { }
