import { Component, OnInit } from '@angular/core';
import Hero from '../type/type.hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css', './heroes-list.css']
})
export class HeroesListComponent implements OnInit {

  public selectedHero: Hero;

  public clss = 'hero';

  public heroes: Hero[] = [
    { id : 1, name : 'Batman', power: ['L\'un des homme le plus riche', 'Maitrise des arts martiaux', 'Résistance aux situations extrême'] },
    { id : 2, name : 'Superman', power: ['Force Surnaturelle', 'L\'un des héros le plus puissant', 'Vision à travers les murs'] },
    { id : 3, name : 'Spiderman', power: ['Capacité d\'agilité hors-norme', 'Lance des toiles d\'araigné', 'Ultra rapide'] }
  ];

  constructor() { }

  public selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }


  ngOnInit() {
  }

}
