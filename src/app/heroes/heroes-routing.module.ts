import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AgregarComponent } from './page/agregar/agregar.component';
import { BuscarComponent } from './page/buscar/buscar.component';
import { HeroeComponent } from './page/heroe/heroe.component';
import { HomeComponent } from './page/home/home.component';
import { ListadoComponent } from './page/listado/listado.component';

const routes: Routes = [
  {
    path: 'heroes',
    component:HomeComponent,
    children: [
      {
        path:'listado',
        component:ListadoComponent
      },
      {
        path: 'agregar',
        component:AgregarComponent
 
      },
      {
        path:'editar/:id',
        component:AgregarComponent
      },
      {
        path:'buscar',
        component:BuscarComponent
      },
      {
        path:':id',
        component:HeroeComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
