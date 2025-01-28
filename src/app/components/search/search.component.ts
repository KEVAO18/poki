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

  constructor(private allData: GetPokiDataService) { }

  ngOnInit(): void {
    this.datos = this.allData.guardarTodosPokemones();
  }

  onSearchChange(event: any): void {
    const query = event.target.value.toLowerCase();
    this.searchResults = this.datos
      .filter((pokemon: any) => pokemon.name.toLowerCase().includes(query))
      .slice(0, 6);
  }

  findId(url: string): string {
    return url.split('/')[6];
  }
}
