import { NgModule } from '@angular/core';

import { HeaderComponent } from './index';
import { HeaderRoutingModule } from './header-routing.module';

@NgModule({
  imports: [
    HeaderRoutingModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
})

export class HeaderModule { }
