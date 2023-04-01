import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from '../prueba/buscar/buscar.component';
import { HeroeComponent } from '../prueba/heroe/heroe.component';
import { AgregarComponent } from './page/agregar/agregar.component';
import { HomeComponent } from './page/home/home.component';
import { ListadoComponent } from './page/listado/listado.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
    { path: 'listado', component: ListadoComponent },
    { path: 'agregar', component: AgregarComponent },
    { path: 'editar/:id', component: AgregarComponent },
    { path: 'buscar', component: BuscarComponent },
    { path: ':id', component: HeroeComponent },
    { path: '**', redirectTo: 'listado' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 
})
export class HeroesRoutingModule { }
