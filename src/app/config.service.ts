import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //added

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  data: any;

  constructor(private http: HttpClient) { }

  getData(limit: number, offset: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
  }


  getDetailsData(name: string) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name );
  }

  getEvolution(id: any) {
    return this.http.get('https://pokeapi.co/api/v2/evolution-chain/' + id);
  }

}
