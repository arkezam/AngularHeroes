import { Component, Input } from '@angular/core';
import { Heroei } from '../../interfaces/heroes';
import { HeroeComponent } from '../../page/heroe/heroe.component';

@Component({
  selector: 'app-heroetarjeta',
  templateUrl: './heroetarjeta.component.html',
  styles: [
  ]
})
export class HeroetarjetaComponent {

  @Input() heroe!:Heroei


}
