import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {


  constructor(private _userService : UserService) {


  }


  public get valueService() : string {
    return this._userService.maVar
  }

  changeServiceValue(){
    this._userService.maVar = "Valeur changée"
  }



  //INPUT

  value! : string;


  //OUTPUT

  enfantValue! : string

  receiveOutput(value : string){
    this.enfantValue = value
  }
}
