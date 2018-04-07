import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule, MatIconModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule, 
    MatMenuModule, MatIconModule, 
    NoopAnimationsModule
  ],
  declarations: [],
  exports: [ MatMenuModule, MatIconModule ]
})
export class MaterialDesignModule { }
