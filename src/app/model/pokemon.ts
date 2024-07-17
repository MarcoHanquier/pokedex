export interface Pokemon {
    name: { fr:string, en:string};
    pokedex_id: number;
    category: string;
    sprites: {regular:string;}
  }

  export interface PokemonDetail {
    name: { fr:string, en:string};
    pokedex_id: number;
    generation: number;
    height: string;
    weight: string;
    category: string;
    sprites: {regular:string;}
    types: [ {name: string, image: string}];
    talents: [ {name: string, tc: boolean}];
    stats: { hp:string, atk:string, def:string,
         spe_atk:string, spe_def:string, vit:string };
    resistances: [ {name: string, multiplier: number}];
    evolution: {pre:[ {pokedex_id:number, 
        name: string, condition: number}], 
        next:[ {pokedex_id:number, 
            name: string, condition: number}]};

  }