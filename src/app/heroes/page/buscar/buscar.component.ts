import { Component } from '@angular/core';
import { Heroei } from '../../interfaces/heroes';
import { HeroesService } from '../../services/heroes.service';
 
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {
  
  selectheroe!:Heroei[]
  filteredHeroes!:Heroei[]

  heroes!:Heroei[]

  constructor(private heroesService:HeroesService){}
  ngOnInit() {
    this.heroesService.getHeroes().subscribe(heroe =>this.heroes = heroe)
  }
 

  filterCountry(event:any){
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.heroes.length; i++) {
      let heroe = this.heroes[i];
      if (heroe.superhero.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(heroe);
      }
    }
    this.filteredHeroes = filtered;
  }
 
 
}
