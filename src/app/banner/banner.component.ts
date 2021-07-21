import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  description = `Information about more than 1.000 pokemons`;


  constructor() { }

  ngOnInit(): void {
  }

}
