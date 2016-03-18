import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import { Hero } from './../../interfaces/hero'
import { HeroService } from './../../services/hero.service';

@Component({
  selector: 'my-hero-detail',
  inputs: ['hero'],
  styleUrls: ['./app/components/hero-detail/hero-detail.component.css'],
  templateUrl: `./app/components/hero-detail/hero-detail.component.html`
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