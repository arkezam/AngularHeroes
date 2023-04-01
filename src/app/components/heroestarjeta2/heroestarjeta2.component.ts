import { Component, Input } from '@angular/core';
import { Heroei } from 'src/app/heroes/interfaces/heroes';

@Component({
  selector: 'app-heroestarjeta2',
  templateUrl: './heroestarjeta2.component.html',
  styles: [
  ]
})
export class Heroestarjeta2Component {
  @Input() heroe2!:Heroei
}
