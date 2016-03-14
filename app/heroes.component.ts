import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from './hero'
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-heroes',
  directives: [HeroDetailComponent],
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
        <span class="badge">{{hero.id}}</span>{{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>
        {{selectedHero.name | uppercase}} is my hero
      </h2>
      <button (click)="gotoDetail()">View Details</button>
    </div>
    `,
  styleUrls:[`./app/heroes.component.css`]
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
