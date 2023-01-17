import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  display:boolean =false


  cities: City[];
  selectedCity:any;
  
  constructor(private router: Router) {
      this.cities = [
          {name: 'agregar', code: 'agregar'},
          {name: 'buscar', code: 'buscar'},
          {name: 'listado', code: 'listado'},
          
      ];
  }
 
    onCitySelect(city:City) { 
      this.router.navigate(['/heroes', city.code])
    
  }

}
