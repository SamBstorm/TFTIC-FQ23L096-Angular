import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {

  myFormGroup! : FormGroup

  constructor(private _formBuilder : FormBuilder) {

  }

  ngOnInit(): void {
    this.myFormGroup = this._formBuilder.group({
      control1 : [null, [Validators.required, Validators.maxLength(100)]],
      control2 : ['bonjour', [Validators.required]]
    })
  }

  submit(){
    console.log(this.myFormGroup.value);

  }
}
