import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu/menu.component';

import { UiModule } from './../ui/ui.module';

@NgModule({
  imports: [
    CommonModule, UiModule
  ],
  declarations: [HeaderComponent, FooterComponent, MenuComponent],
  exports : [ HeaderComponent, FooterComponent ]
})
export class LayoutModule { }
