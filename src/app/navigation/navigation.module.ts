import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuComponent } from './panel-menu/panel-menu.component';
import { MenubarModule,PanelMenuModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    PanelMenuModule
  ],
  declarations: [PanelMenuComponent],
  exports: [PanelMenuComponent]
})
export class NavigationModule { }
