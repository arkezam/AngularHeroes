import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
   {
     path: 'heroes',
     loadChildren: () => import('./heroes/heroes.module').then( r => r.HeroesModule ),
   },
  {
    path:'prueba',
    loadChildren: () => import('./prueba/prueba.module').then( m => m.PruebaModule ),
  },

  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
