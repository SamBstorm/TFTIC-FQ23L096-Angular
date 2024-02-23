import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExoService {

  shoppingList : Map<string, number> = new Map<string, number>;

  constructor() {

   }
}
