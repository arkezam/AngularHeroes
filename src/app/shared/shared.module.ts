import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageComponent } from './error-page/error-page.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatrialModule } from '../matrial/matrial.module';



@NgModule({
  declarations: [

    ErrorPageComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
 
    MatrialModule
    
  ],
  
  exports:[ 
    SidebarComponent,
    ErrorPageComponent
  ],
})
export class SharedModule { }
