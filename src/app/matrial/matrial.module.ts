import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
@NgModule({
 
 
  exports:[
    BrowserAnimationsModule,
    CommonModule,
    SidebarModule,
    ButtonModule
  ]
})
export class MatrialModule { }
