import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from './../../interfaces/hero'
import {HeroDetailComponent} from './../hero-detail/hero-detail.component';
import {HeroService} from './../../services/hero.service';

@Component({
  selector: 'my-heroes',
  directives: [HeroDetailComponent],
  templateUrl: `./app/components/heroes/heroes.component.html`,
  styleUrls:[`./app/components/heroes/heroes.component.css`]
})
export class HeroesComponent implements OnInit{

  constructor(
    private _router: Router,
    private _heroService: HeroService
  ) { }

  public selectedHero:Hero;
  public heroes:Hero[];

  getHeroes() {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  ngOnInit(){
    console.log('App Component Init');
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  };

  gotoDetail(hero:Hero){
    this._router.navigate(['HeroDetail', {id: this.selectedHero.id}])
  }
}
