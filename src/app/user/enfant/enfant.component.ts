import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.scss'
})
export class EnfantComponent {


  public get valueService() : string {
    return this._userService.maVar
  }



  // INPUT
  @Input()
  parentValue! : string



  // OUTPUT

  constructor(private _userService : UserService) {
    this.myOutput = new EventEmitter<string>
  }

  maVar! : string

  @Output()
  myOutput : EventEmitter<string>

  Emit(){
    this.myOutput.next(this.maVar)
  }


}
