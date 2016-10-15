import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

// To promise method not included by default in Augular Observable
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  private heroesUrl = 'app/heroes';  // URL to web api

   constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
           .toPromise()
           // JSON array has a single data prob which contains 'heroes' array
           .then(response => response.json().data as Hero[])
           .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  // Returns error to user in a rejected promise so they can use it 
  return Promise.reject(error.message || error);
}

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

}
