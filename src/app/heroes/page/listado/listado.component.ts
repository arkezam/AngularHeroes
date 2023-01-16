import { Component, OnInit } from '@angular/core';
import { Heroei } from '../../interfaces/heroes';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {
  
  heroes:Heroei[]=[];


  constructor ( private heroesService: HeroesService,){

  }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(
      (r)=>
      {
        this.heroes = r
      });
  }


}
