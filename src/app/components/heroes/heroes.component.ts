import { Component, OnInit} from '@angular/core';
import {HeroesService, Heroe} from "../../servicios/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  // private heroes:Heroe [] = [];
  heroes:Heroe [] = [];
  constructor(private _heroesService:HeroesService) {

      console.log("constructor");
      }

  ngOnInit(){
    this.heroes = this._heroesService.getHeroe();
    console.log("ngOnInit");
    console.log(this.heroes);
  }



}
