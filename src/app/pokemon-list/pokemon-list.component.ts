import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../config.service'; //added
import { HttpClient } from '@angular/common/http'; //added

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  title = 'PokemonList';
  detailData: any = [];
  page = 1;
  totalPokemons: number;

  constructor(private config: ConfigService, private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.config.getData(20, this.page + 0).subscribe((data: any) => {
      this.totalPokemons = data.count;

      data.results.forEach((value) => {
        this.config.getDetailsData(value.name).subscribe((dataByName: any) => {
          this.detailData.push(dataByName);
          console.log(dataByName);
        });
      });
    })
  }

}
