import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {
  display:boolean =false

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
