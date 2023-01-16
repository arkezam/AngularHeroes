import { NgModule } from '@angular/core';
import {ListboxModule} from 'primeng/listbox';
import {FormsModule} from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox'
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
 
 
  exports:[
    
    SidebarModule,
    AutoCompleteModule,
    ButtonModule,
    ListboxModule,
    FormsModule,
    CheckboxModule,
    InputTextModule,
    CardModule,
    ProgressSpinnerModule
  ]
})
export class MatrialModule { }
