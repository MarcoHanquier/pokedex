
import { Component } from '@angular/core';
import { PokemonDetail, Pokemon } from 'src/app/model/pokemon';
import { ApiProviderService } from 'src/app/services/api-provider.service';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {

  dataSource: Pokemon[] = [];
  pokemons:Pokemon[] = [];
  pokemonDetails!:PokemonDetail;
  pokemonName: string = "";


  constructor(
    private api: ApiProviderService,
    public dialog: MatDialog
  ) {
  }
  openPokemonDetails(id:number){
    this.api.pokemonID = id;
    
    const dialogRef = this.dialog.open(PokemonDetails);
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.api.getPokemonList().subscribe(data => {
      this.pokemons = data;
      this.api.pokemons = data;
    
    });
    this.api.getPokemonDetails().subscribe(data => {
      this.pokemonDetails = data;
      this.api.pokemonDetails = data;
    });
  }

}


@Component({
  selector: 'pokemon-details',
  templateUrl: 'pokemonDetails.html',
  styleUrls: ['pokemonDetails.css'],

  standalone: true,
  imports: [CommonModule],
})
export class PokemonDetails {
  constructor(private api: ApiProviderService) {}

    pokemonID: number = this.api.pokemonID;
  pokemonDetails!:PokemonDetail;

  ngOnInit() {
    this.fetchData();
    
    this.pokemonDetails = this.api.pokemonDetails;
    
  }

  fetchData(): void {

    this.api.getPokemonDetails().subscribe(data => {
      this.pokemonDetails = data;
    });
  }


}