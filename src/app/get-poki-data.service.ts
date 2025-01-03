import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPokiDataService {

  public api_url = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getPokiData(limit = 21, offset = 0): Observable<any> {
      return this.http.get(`${this.api_url}pokemon?limit=${limit}&offset=${offset}`);
  }
    
  getPorTipo(tipo = 1): Observable<any> {
    return this.http.get(`${this.api_url}type/${tipo}`);
  }
}
