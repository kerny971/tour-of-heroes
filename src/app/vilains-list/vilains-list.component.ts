import { Component, OnInit } from '@angular/core';
import Vilain from '../type/type.vilain';
import Hero from '../type/type.hero';
@Component({
  selector: 'app-vilains-list',
  templateUrl: './vilains-list.component.html',
  styleUrls: ['../heroes-list/heroes-list.component.css', 'vilains-list.css']
})
export class VilainsListComponent implements OnInit {

  public clss = 'vilain';

  public selectedHero: Hero;

  vilains: Vilain[] = [
    { id : 1, name : 'Joker', power: ['Faire les autres mourrir de rire', 'Très agile avec son corps', 'Esprit de fou'] },
    { id : 2, name : 'RAS AL GUL', power: ['Maitre de Batman', 'Maitrise du sable', 'Chef de la ligue des Assasins'] },
    { id : 3, name : 'THANOS', power: ['Puissance proche de celle d\'un dieu', 'Ame de conquérant', 'Destructeur de planètes'] },
  ];

  constructor() { }

  public selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
