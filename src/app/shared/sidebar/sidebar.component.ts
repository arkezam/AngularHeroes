import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {
  display:boolean =false


  cities: City[];
  selectedCity:any;
  
  constructor(private router: Router) {
      this.cities = [
          {name: 'agregar', code: 'agregar'},
          {name: 'buscar', code: 'buscar'},
          {name: 'listado', code: 'listado'},
          {name: 'heroe', code: 'heroe'},
          
      ];
  }
 
    onCitySelect(city:City) { 
      this.router.navigate(['/heroes', city.code])
    
  }
}
