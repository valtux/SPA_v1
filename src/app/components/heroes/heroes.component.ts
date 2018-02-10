import { Component, OnInit} from '@angular/core';
import {HeroesService, Heroe} from "../../servicios/heroes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {


  heroes:Heroe [] = [];
  constructor(private _heroesService:HeroesService,
              private route:Router
            ) {

      // console.log("constructor");
      }

  ngOnInit(){
    this.heroes = this._heroesService.getHeroe();
    // console.log("ngOnInit");
    // console.log(this.heroes);
  }

  verHeroe(idx:number){
    console.log(idx);
    this.route.navigate(['/heroe', idx]);
  }

}
