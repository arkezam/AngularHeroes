import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { ListaComponent } from './lista/lista.component';
import { Matrial2Module } from '../matrial2/matrial.module';
import { RouterModule } from '@angular/router'; 
import { Heroestarjeta2Component } from '../components/heroestarjeta2/heroestarjeta2.component';
import { MatrialModule } from '../matrial/matrial.module';
import { BuscarComponent } from './buscar/buscar.component';
import { HeroeComponent } from './heroe/heroe.component';


@NgModule({
  declarations: [
    InicioComponent,
    ListaComponent,
    Heroestarjeta2Component,
    BuscarComponent,
    HeroeComponent,
  ],
  imports: [
    CommonModule,
    PruebaRoutingModule,
    Matrial2Module,
    RouterModule,
    MatrialModule
    
  ]
})
export class PruebaModule { }
