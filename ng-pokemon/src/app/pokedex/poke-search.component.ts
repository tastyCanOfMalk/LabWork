import { Component } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.css']
})
export class PokeSearchComponent {

  searchBoxInput:string = "Pokemonm";

  setInput(e:any){
    this.searchBoxInput = e.target.value;
  }
}
