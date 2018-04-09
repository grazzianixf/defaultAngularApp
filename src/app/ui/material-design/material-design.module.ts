import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatProgressSpinnerModule, MatSnackBarModule,
          MatListModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule, 
    MatMenuModule, MatIconModule, MatSidenavModule, MatSnackBarModule, MatListModule,
    NoopAnimationsModule
  ],
  declarations: [],
  exports: [ MatMenuModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatProgressSpinnerModule, MatListModule ]
})
export class MaterialDesignModule { }
