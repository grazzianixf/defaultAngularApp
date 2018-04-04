import { NgModule } from '@angular/core';

import { FooterComponent } from './index';
import { FooterRoutingModule } from './footer-routing.module';

@NgModule({
  imports: [
    FooterRoutingModule,
  ],
  declarations: [
    FooterComponent,
  ],
  exports: [
    FooterComponent,
  ],
})

export class FooterModule { }
