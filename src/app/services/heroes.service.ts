import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Heroe} from '../interfaces/heroe.interface';
import 'rxjs/add/operator/map';


@Injectable()
export class HeroesService {

  fireUrl = 'https://heroesapp-aaed8.firebaseio.com/heroes.json';

  constructor(private http: Http) {
  }

  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);
    let header = new Headers({
      'Content-type': 'application/json'
    });

    return this.http.post(this.fireUrl, body, {headers: header})
      .map(res => {
        return res.json();
      });


  }

}
