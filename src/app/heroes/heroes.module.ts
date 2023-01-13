import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { AgregarComponent } from './page/agregar/agregar.component';
import { BuscarComponent } from './page/buscar/buscar.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { ListadoComponent } from './page/listado/listado.component';
import { HeroeComponent } from './page/heroe/heroe.component';
import { MatrialModule } from '../matrial/matrial.module';



@NgModule({
  declarations: [
    HomeComponent,
    AgregarComponent,
    BuscarComponent,
    ListadoComponent,
    HeroeComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MatrialModule
  ]
})
export class HeroesModule { }
