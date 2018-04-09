import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { UiModule } from './../ui/ui.module';
import { MenuComponent } from './menu/menu/menu.component';

@NgModule({
  imports: [
    CommonModule, UiModule
  ],
  declarations: [HeaderComponent, FooterComponent, MenuComponent],
  exports : [ HeaderComponent, FooterComponent ]
})
export class LayoutModule { }
