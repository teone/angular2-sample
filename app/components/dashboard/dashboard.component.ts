import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './../../interfaces/hero';
import { HeroService } from './../../services/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './app/components/dashboard/dashboard.component.html',
  styleUrls: ['./app/components/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  heroes:Hero[] = [];

  constructor(
    private _router:Router,
    private _heroService:HeroService
  ){}

  ngOnInit(){
    this._heroService.getHeroes()
     .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero:Hero){
    this._router.navigate(['HeroDetail', {id: hero.id}])
  }
}