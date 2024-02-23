import { Component } from '@angular/core';
import { ExoService } from '../../services/exo.service';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.scss'
})
export class EnfantComponent {

  constructor(private _exoService : ExoService) {

  }

  productName! : string;

  Add(){
    let lowerProduct = this.productName.toLowerCase()

    if (this._exoService.shoppingList.get(lowerProduct)) {
      this._exoService.shoppingList.set(lowerProduct, this._exoService.shoppingList.get(lowerProduct)! + 1);
    }
    else{
      this._exoService.shoppingList.set(lowerProduct, 1);
    }
  }

}
