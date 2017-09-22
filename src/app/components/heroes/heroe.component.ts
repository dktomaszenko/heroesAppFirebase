import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Heroe} from '../../interfaces/heroe.interface';
import {HeroesService} from '../../services/heroes.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  constructor(private heroesService: HeroesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

  }

  guardar() {
    this.heroesService.nuevoHeroe(this.heroe, 'heroes').subscribe(
      data => {
        this.router.navigate(['/heroe', data.name]);
      },
      error => console.error(error)
    );
  }

}
