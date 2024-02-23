import { Component } from '@angular/core';
import { ExoService } from '../../services/exo.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  constructor(private _exoService : ExoService) {
  }


  public get shopList() : Map<string, number> {

    return this._exoService.shoppingList
  }

  substract(index : string){
    if(this._exoService.shoppingList.get(index) === 1){
      this._exoService.shoppingList.delete(index)
    }
    else{
      this._exoService.shoppingList.set(index, this._exoService.shoppingList.get(index)! - 1 )
    }

  }

}
