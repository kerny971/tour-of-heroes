import {Component, Input, OnInit} from '@angular/core';
import Hero from '../type/type.hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input() hero: Hero;

  @Input() clss;

  constructor() { }

  ngOnInit() {
  }

}
