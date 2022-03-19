import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'; // URL to web API

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log("fetched heroes from API")),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: Number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.log(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  
private log(message: string) {
  this.messageService.add(`HeroService: ${message}`)
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); // log err msg to console
    this.log(`{operation} failed: ${error.message}`); // let the app keep running by returning an empty result
    return of(result as T);
  }
}

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}
