import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
 


@NgModule({
 
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule
  ],
  exports:[
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule
  ]
})
export class MatrialModule { }
