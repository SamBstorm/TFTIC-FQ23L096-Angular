import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.scss'
})
export class EnfantComponent {


  // INPUT
  @Input()
  parentValue! : string



  // OUTPUT

  constructor() {
    this.myOutput = new EventEmitter<string>
  }

  maVar! : string

  @Output()
  myOutput : EventEmitter<string>

  Emit(){
    this.myOutput.next(this.maVar)
  }


}
