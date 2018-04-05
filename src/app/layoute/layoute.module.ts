import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FootereComponent } from './footere/footere.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FootereComponent],
  exports : [ HeaderComponent, FootereComponent ]
})
export class LayouteModule { }
