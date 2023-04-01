import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { BuscarComponent } from './buscar/buscar.component';
import { HeroeComponent } from './heroe/heroe.component';
 
 
import { InicioComponent } from './inicio/inicio.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {
    path:'',
    component:InicioComponent,
    children:[ 
      {path:'lista',component:ListaComponent},
      {path:'buscar',component:BuscarComponent},
      {path:':id', component:HeroeComponent},
      {        path:'**',redirectTo:'lista'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],

})
export class PruebaRoutingModule { }
