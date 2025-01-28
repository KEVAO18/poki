import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor() { }

  isOnline(): boolean {
    return navigator.onLine;
  }

}
