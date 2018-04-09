import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule, MatIconModule, MatToolbarModule, MatSidenavModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule, 
    MatMenuModule, MatIconModule, MatSidenavModule,
    NoopAnimationsModule
  ],
  declarations: [],
  exports: [ MatMenuModule, MatIconModule, MatToolbarModule, MatSidenavModule ]
})
export class MaterialDesignModule { }
