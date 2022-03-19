import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'; // URL to web API

  getHeroes(): Observable<Hero[]> {
    this.log("fetched heroes from API");
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: Number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  
private log(message: string) {
  this.messageService.add(`HeroService: ${message}`)
}

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}
