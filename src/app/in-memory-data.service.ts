import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11,name: 'Dr. Nice' },
      {id: 12,name: 'Narco' },
      {id: 13,name: 'Bombasto'},
      {id: 14,name: 'Celeritas'},
      {id: 15,name: 'Magneta'},
      {id: 16,name: 'Rubberman'},
      {id: 17,name: 'Dyname'},
      {id: 18,name: 'Dr IQ'},
      {id: 19,name: 'Magma'},
      {id: 20,name: 'Tornado'},
    ];
    return {heroes}      
  }

  // to generate an id -> if there are ID's it takes the biggest ID and adds 1, otherwise it returns 11
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}