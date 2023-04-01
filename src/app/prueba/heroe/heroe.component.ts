import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroei } from 'src/app/heroes/interfaces/heroes';
import { HeroesService } from 'src/app/heroes/services/heroes.service';
 


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
