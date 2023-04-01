import { Component } from '@angular/core';
import { Heroei } from 'src/app/heroes/interfaces/heroes';
import { HeroesService } from 'src/app/heroes/services/heroes.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent {

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
