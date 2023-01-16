import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroei } from '../interfaces/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http:HttpClient) { }

  getHeroes():Observable<Heroei[]> {
    return this.http.get<Heroei[]>('http://localhost:3000/heroes')
  }

  getHeroeById(id:string):Observable<Heroei> {
    return this.http.get<Heroei>('http://localhost:3000/heroes/'+id)
  }

}
