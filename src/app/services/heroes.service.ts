import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Heroe} from '../interfaces/heroe.interface';
import 'rxjs/add/operator/map';


@Injectable()
export class HeroesService {

  fireUrl = 'https://heroesapp-aaed8.firebaseio.com/';

  constructor(private http: Http) {
  }

  nuevoHeroe(heroe: Heroe, prefix: string = 'heroes') {
    let body = JSON.stringify(heroe);
    let header = new Headers({
      'Content-type': 'application/json'
    });

    return this.http.post(this.fireUrl + `${ prefix }.json`, body, {headers: header})
      .map(res => {
        return res.json();
      });
  }

  actualizarHeroe(heroe: Heroe, prefix: string = 'heroes', id: string) {
    let body = JSON.stringify(heroe);
    let header = new Headers({
      'Content-type': 'application/json'
    });

    return this.http.put(this.fireUrl + `${ prefix }/${id}.json`, body, {headers: header})
      .map(res => {
        return res.json();
      });
  }

  getHeroe(id: string, prefix: string = 'heroes') {
    return this.http.get(this.fireUrl + `${ prefix }/${id}.json`)
      .map(res => res.json());
  }

  getHeroes(prefix: string = 'heroes') {
    return this.http.get(this.fireUrl + `${ prefix }.json`)
      .map(res => res.json());
  }


}
