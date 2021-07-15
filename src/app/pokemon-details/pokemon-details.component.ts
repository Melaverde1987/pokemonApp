import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../config.service'; //added
import { ActivatedRoute } from '@angular/router'; //added
import { HttpClient } from '@angular/common/http'; //added

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  data: any = [];
  pokemonName: string;
  dataByName: any;
  pokemonId: any;
  evolutionChain: any = [];

  constructor(private config: ConfigService, private route: ActivatedRoute, private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.data = [+params.get('pokemonName')];
      let pokemonName = params.get('pokemonName');
      this.pokemonName = pokemonName;
    });

    this.config.getDetailsData(this.pokemonName).subscribe((dataByName: any) => {
      this.dataByName = dataByName;
      this.pokemonId = dataByName.id;
      this.getEvolution(this.pokemonId);
      console.log(this.pokemonId);
    });
    
  }

  getEvolution(pokemonId) {
    this.config.getEvolution(pokemonId).subscribe((pokemonEvolution: any) => {

      let evolutionChain = [];
      let evolutionData = pokemonEvolution.chain;

      do {
        let evolutionDetails = evolutionData['evolution_details'][0];

        evolutionChain.push({
          "species_name": evolutionData.species.name,
          "min_level": !evolutionDetails ? 1 : evolutionDetails.min_level,
          "trigger_name": !evolutionDetails ? null : evolutionDetails.trigger.name,
          "item": !evolutionDetails ? null : evolutionDetails.item
        });

        evolutionData = evolutionData['evolves_to'][0];
        this.evolutionChain = evolutionChain;
        console.log(this.evolutionChain);
        
      } while (evolutionData != undefined && evolutionData.hasOwnProperty('evolves_to'));
      
    });
    return this.evolutionChain;
  }
}
