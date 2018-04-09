import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatProgressSpinnerModule, MatSnackBarModule,
          MatListModule, MatFormFieldModule, MatTableModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule, 
    MatMenuModule, MatIconModule, MatSidenavModule, MatSnackBarModule, MatListModule, MatFormFieldModule, MatTableModule,
    NoopAnimationsModule
  ],
  declarations: [],
  exports: [ MatMenuModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatProgressSpinnerModule, MatListModule, MatFormFieldModule, MatTableModule ]
})
export class MaterialDesignModule { }
