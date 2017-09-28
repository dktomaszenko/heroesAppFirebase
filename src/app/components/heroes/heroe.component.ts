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

  private heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  nuevo: boolean = false;
  id: string;

  constructor(private heroesService: HeroesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(
      parametros => {
        this.id = parametros['id'];
        if (this.id !== 'nuevo') {
          this.heroesService.getHeroe(this.id)
            .subscribe(heroe => {
              this.heroe = heroe;
            });
        }
      }
    );
  }

  ngOnInit() {

  }

  guardar() {
    if (this.id === 'nuevo') {
      // insert
      this.heroesService.nuevoHeroe(this.heroe, 'heroes').subscribe(
        data => {
          this.router.navigate(['/heroe', data.name]);
        },
        error => console.error(error)
      );
    } else {
      // update
      this.heroesService.actualizarHeroe(this.heroe, 'heroes', this.id).subscribe(
        data => {
          this.router.navigate(['/heroe', data.name]);
        },
        error => console.error(error)
      );
    }

  }

  agregarNuevoHeroe(form: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);
    form.reset({
      casa: 'Marvel'
    });
  }

}
