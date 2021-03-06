import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit{
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  } // End onSelect

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  } // End getHeroes

  ngOnInit(): void {
    this.getHeroes();
  } // End ngOnInit

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  } // End gotoDetail
} // End AppComponent
