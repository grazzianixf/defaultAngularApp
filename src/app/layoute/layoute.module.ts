import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadereComponent } from './headere/headere.component';
import { FootereComponent } from './footere/footere.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeadereComponent, FootereComponent],
  exports : [ HeadereComponent, FootereComponent ]
})
export class LayouteModule { }
