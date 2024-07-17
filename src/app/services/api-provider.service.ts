import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokemonDetail, Pokemon } from '../model/pokemon';

export interface ApiResponse {
  results: Pokemon[];
  info: Object;
}

@Injectable({
  providedIn: 'root'
})
export class ApiProviderService {
  name: String = "";
  pokemonID: number = 0;
  pokemons:Pokemon[] = [];

  pokemonDetails!:PokemonDetail;


  
  constructor(
    private http: HttpClient
  ) { }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('https://tyradex.vercel.app/api/v1/pokemon');
  }

  getPokemonDetails(): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>('https://tyradex.vercel.app/api/v1/pokemon/' + this.pokemonID);

  }
}
