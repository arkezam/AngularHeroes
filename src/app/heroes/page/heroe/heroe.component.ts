import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroei } from '../../interfaces/heroes';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!:Heroei
  heroeid:string='';

  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService){}
  a:string =''
  ngOnInit(): void {
     

    this.activatedRoute.params.subscribe(({id})=>{
      
      this.heroesService.getHeroeById(id).subscribe(
        (r)=>
        {
          this.heroe = r
        })
    })


  }

}
