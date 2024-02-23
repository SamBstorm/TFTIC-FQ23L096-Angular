import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {

  formGroup! : FormGroup

  constructor(private _formBuilder : FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      lastname : [null, [Validators.required]],
      firstname : [null, [Validators.required]],
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required, Validators.minLength(8)]],
      address : [null],
      phone : [null],
      birthdate : [null, [Validators.required]],
      pseudos : this._formBuilder.array([])
    })
  }


  public get pseudosArray() : FormArray {
    return this.formGroup.get('pseudos') as FormArray
  }

  Add(){
    this.pseudosArray.push(new FormControl(null, Validators.required))
  }

  remove(index : number){
    this.pseudosArray.controls.splice(index, 1)
  }


  submit(){

    let values = this.formGroup.value

    let user : User = {
      firstname : values['firstname'],
      lastname : values['lastname'],
      address : values['address'],
      birthdate :values['birthdate'],
      email : values['email'],
      password : values['password'],
      phone : values['phone'],
      pseudos : values['pseudos']
    }

    console.log(user);


  }

}
