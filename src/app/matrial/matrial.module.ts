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
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
@NgModule({
 
 
  exports:[
    SidebarModule,
    AutoCompleteModule,
    ButtonModule,
    DropdownModule,
    ListboxModule,
    FormsModule,
    CheckboxModule,
    InputTextModule,
    CardModule,
    ProgressSpinnerModule,
    ToastModule
  ]
})
export class MatrialModule { }
