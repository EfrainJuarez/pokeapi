import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from 'src/app/Services/poke-service.service';
@Component({
  selector: 'app-poke-component',
  templateUrl: './poke-component.component.html',
  styleUrls: ['./poke-component.component.css'],
})
export class PokeComponentComponent implements OnInit {
  public data: any = [];
  pokemones: any = [];
  constructor(public _pokemonServices: PokeServiceService) {}
  ngOnInit(): void {
    this.GetPokemons();
  }
  GetPokemons() {
    let pokemon;
    for (let index = 1; index <= 151; index++) {
      this._pokemonServices.getPokmen(index).subscribe((data: any) => {
        pokemon = {
          indice: index,
          name: data.name,
          img: data.sprites.front_shiny,
          type: data.types[0].type.name,
        };
        this.pokemones.push(pokemon);
      });
    }
  }
}
