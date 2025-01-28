import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPokiDataService {

  public api_url = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param param parametros de la url 
   * @returns retorna un observable con la respuesta de la petición 
   */
  getAllOfOne(param: string): Observable<any> {
    return this.http.get(`${this.api_url}${param}`);
  }

  /**
   * 
   * @param limit cantidad de pokemones a traer
   * @param offset desde donde traer
   * @returns retorna un observable con todos los pokemones de la api en el limite de los parametros dados
   */
  getPokiData(limit = 21, offset = 0): Observable<any> {
      return this.getAllOfOne(`pokemon?limit=${limit}&offset=${offset}`);
  }
    
  /**
   * 
   * @param tipo tipo de pokemon a traer
   * @returns retorna un observable con la respuesta de la petición
   */
  getPorTipo(tipo: string = 'normal'): Observable<any> {
    return this.getAllOfOne(`type/${tipo}`);
  }

  /**
   * 
   * @param id id del pokemon a traer
   * @returns retorna un observable con la respuesta de la petición
   */
  getOnePoki(id: number|string): Observable<any> {
    return this.getAllOfOne(`pokemon/${id}`);
  }

  /**
   * 
   * @param id id del pokemon a traer
   * @returns retorna un observable con la respuesta de la petición
   */
  getAbility(id: string): Observable<any> {
    return this.getAllOfOne(`ability/${id}`);
  }

  /**
   * 
   * @param id id del pokemon a traer
   * @returns retorna un observable con la respuesta de la petición
   */
  getMove(id: number): Observable<any> {
    return this.getAllOfOne(`move/${id}`);
  }

  guardarTodosPokemones() {
    if(!localStorage.getItem('pokemones')) {
      this.getPokiData(1025).subscribe((data: any) => {
        localStorage.setItem('pokemones', JSON.stringify(data.results));
      });
    }
    
    return JSON.parse(localStorage.getItem('pokemones') || '{}');
  }

}
