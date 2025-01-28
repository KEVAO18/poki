import { Component, OnInit } from '@angular/core';
import { GetPokiDataService } from '@app/get-poki-data.service';
import { PokiCardComponent } from "../poki-card/poki-card.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  datos!: any;
  searchResults: any[] = [];
  pokerandom!: any;
  constructor(private allData: GetPokiDataService) { }

  ngOnInit(): void {
    this.datos = this.allData.guardarTodosPokemones();
    this.Randomizer();
  }

  Randomizer(): void {
    this.pokerandom = this.datos[Math.floor(Math.random() * 1025) + 1];
  }

  onSearchChange(event: any): void {
    const query = event.target.value.toLowerCase();
    this.searchResults = (query.length > 0)? this.datos
      .filter((pokemon: any) => pokemon.name.toLowerCase().includes(query))
      .slice(0, 6) : [];
  }

  onSubmit(event: Event): void {
    event.preventDefault();
  }

  findId(url: string): string {
    return url.split('/')[6];
  }
}
