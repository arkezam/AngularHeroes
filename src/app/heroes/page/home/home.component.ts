import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from 'src/app/auth/services/auth.service';
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
  
  constructor(private router: Router, private authService:AuthService) {
      this.cities = [
          {name: 'agregar', code: 'agregar'},
          {name: 'buscar', code: 'buscar'},
          {name: 'listado', code: 'listado'},
          
      ];
  }

  get fauth(){
    return this.authService.auth
  }


  salir(){
    console.log('salir')
    this.router.navigate(['./auth']);
  }
 
    onCitySelect(city:City) { 
      this.router.navigate(['/heroes', city.code])
    
  }

}
