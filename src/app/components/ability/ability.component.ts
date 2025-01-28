import { GetPokiDataService } from '@app/get-poki-data.service';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface AbilityInterface {
  name: string;
  descripcion: string;
}

@Component({
  selector: 'app-ability',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ability.component.html',
  styleUrl: './ability.component.scss'
})
export class AbilityComponent implements OnInit {

  @Input() pokiData!: any[];

  abilitiesIn: AbilityInterface[] = [];

  constructor(private getPokiDataService: GetPokiDataService) { }

  ngOnInit() {
    // maping data from pokidata to an array of abilities
    const abilities = this.pokiData.map((ability: any) => ability.ability.name);

    // fetch ability data
    abilities.forEach(ability => {
      this.fetchAbilityData(ability);
    });
  }

  fetchAbilityData(ability: string) {
      this.getPokiDataService.getAbility(ability).subscribe({
        next: (response) => {
          response.effect_entries.forEach((effect: any) => {
            if (effect.language.name === 'en') {
              this.abilitiesIn.push({
                name: response.name,
                descripcion: effect.effect
              });
            }
          });
        },
        error: (error) => {
          console.error('Error al obtener los datos:', error);
        }
      });
    }
}
