import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokeServiceService {
  public uri = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private _http: HttpClient) {}
  getPokmen(index: number) {
    const url = `${this.uri}/${index}`;
    return this._http.get(url);
  }
}
