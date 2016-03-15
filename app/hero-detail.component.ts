import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Hero} from './interfaces/hero'
import { HeroService } from './services/hero.service';

@Component({
  selector: 'my-hero-detail',
  inputs: ['hero'],
  styleUrls: ['./app/hero-detail.component.css'],
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}}</h2>
    <div>
        <label>id: </label>
        {{hero.id}}
    </div>
    <div>
        <label>name: </label>
        <input type="text" [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
  <button (click)="goBack()">Back</button>
  `
})

export class HeroDetailComponent implements OnInit{

  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams) {
  }

  hero:Hero;

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}