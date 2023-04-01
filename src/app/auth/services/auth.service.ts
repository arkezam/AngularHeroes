import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { Auth } from '../interfaces/auth.interfaces';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth: Auth| undefined;


  constructor(private http:HttpClient) { }


  get auth(){
    return {...this._auth}
  }

  login(id:number): Observable<Auth> {
     return this.http.get<Auth>(`http://localhost:3000/usuarios/${id}`).pipe(
      tap(repsp=>this._auth=repsp)
     )
  }

}
