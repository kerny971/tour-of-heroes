import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {

  public id: number;

  constructor(route: ActivatedRoute) {
    this.id = parseInt(route.snapshot.paramMap.get('id'), 0);
  }

  ngOnInit() {
  }

}
