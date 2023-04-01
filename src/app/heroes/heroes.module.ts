import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HomeComponent } from './page/home/home.component';
import { AgregarComponent } from './page/agregar/agregar.component';
import { BuscarComponent } from './page/buscar/buscar.component';
import { ListadoComponent } from './page/listado/listado.component';
import { HeroeComponent } from './page/heroe/heroe.component';
import { HeroetarjetaComponent } from './components/heroetarjeta/heroetarjeta.component';
import { MatrialModule } from '../matrial/matrial.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    AgregarComponent,
    BuscarComponent,
    ListadoComponent,
    HeroeComponent,
    HeroetarjetaComponent,
    
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MatrialModule,
    RouterModule
  ]
})
export class HeroesModule { }
