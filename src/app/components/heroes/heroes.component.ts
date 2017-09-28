import {Component, OnInit} from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Heroe} from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  public heroes: Heroe[];

  constructor(private heroesService: HeroesService) {

    this.getHeroes();

  }

  ngOnInit() {
  }

  getHeroes() {
    this.heroesService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;

      });
  }


  eliminar(id: string) {
    this.heroesService.borrarHeroe(id)
      .subscribe(res => {
        if (res === null) {
          this.getHeroes();
        }
      });
  }

}
