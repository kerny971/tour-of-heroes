import { Injectable } from '@angular/core';
import Hero from './type/type.hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[] = [
    { id : 1, name : 'Batman', power: ['Riche', 'Maitrise des arts martiaux', 'Résistant'] },
    { id : 2, name : 'Superman', power: ['Force Surnaturelle', 'L\'un des héros le plus puissant', 'Vision à travers les murs'] },
    { id : 3, name : 'Spiderman', power: ['Agile', 'Lance des toiles d\'araigné', 'Ultra rapide'] },
  ];


  constructor() { }

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHeroById(id: number): Hero {
    return this.heroes.find((hero: Hero): boolean => hero.id === id);
  }

  setHeroes(hero: Hero): void {
    this.heroes.push(hero);
  }
}
