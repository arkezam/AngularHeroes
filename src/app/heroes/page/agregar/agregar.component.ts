import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HeroesModule } from '../../heroes.module';
import { Heroei, Publisher } from '../../interfaces/heroes';
import { HeroesService } from '../../services/heroes.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ],
  providers: [MessageService]
})


export class AgregarComponent implements OnInit{

  constructor(private heroeService:HeroesService, private activatedRoute:ActivatedRoute, private router:Router, private toast:MessageService){}



  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id})=>{
      if(id){
        this.heroeService.getHeroeById(id).subscribe(heroe=>{
          this.heroe = heroe
        })
      }
    })
    
  }
  

  heroe:Heroei={
    superhero:'',
    alter_ego:'',
    characters:'',
    publisher:Publisher.DCComics,
    first_appearance:'',
    alt_img:'' 
  }

  publisher=[

  {
    name:'DC-Comics',
    description: 'Comics'
  },
  {
    name:'Marvel-Comics',
    descpirption:'Comics'
  }
]

  value2:string=''

  guardar(){
    if(this.heroe.superhero.trim().length == 0)
    {return;}

    if(this.heroe.id){
      //editar
      this.heroeService.actualizarHeroe(this.heroe).subscribe(r=>{
        this.toast.add({severity:'success', summary: 'Success', detail: 'Message Content'});
      })
    }
    else
    this.heroeService.agregarHeroe(this.heroe).subscribe(r=>{
      this.router.navigate(['/heroes'])
    })
    
  }

  borrar(){

    if(this.heroe.superhero.trim().length == 0)
      {return;}
    this.heroeService.eliminarHeroe(this.heroe.id!).subscribe(resp=>this.router.navigate(['/heroes']))
  }

}


