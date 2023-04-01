import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/auth.interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 
})
export class LoginComponent {

  constructor(private router:Router,
              private authService:AuthService){}


  user : Auth|undefined;


  ingresar(){


    this.router.navigate(['./heroes'])
    // this.authService.login(1).subscribe(r=>{
    //   if(r.id){
    //     this.router.navigate(['./prueba'])
    //     this.user = r
    //     console.log(r)
    //   }
    // })


  }
}
