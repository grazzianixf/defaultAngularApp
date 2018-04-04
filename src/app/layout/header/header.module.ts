import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { HeaderComponent } from './index';
import { HeaderRoutingModule } from './header-routing.module';

@NgModule({
  imports: [
    HeaderRoutingModule, CommonModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
})

export class HeaderModule { }
