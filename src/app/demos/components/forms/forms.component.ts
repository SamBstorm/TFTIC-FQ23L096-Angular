import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent implements OnInit {

  myFormGroup! : FormGroup

  constructor(private _formBuilder : FormBuilder, private _cd : ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.myFormGroup = this._formBuilder.group({
      control1 : [null, [Validators.required, Validators.maxLength(100)]],
      control2 : ['bonjour', [Validators.required, this.customValidator()]],
      array : this._formBuilder.array([])
    })
  }


  public get myArray() : FormArray {
    return this.myFormGroup.get('array') as FormArray
  }

  extendArray(){
    this.myArray.push(this._formBuilder.control(null, [Validators.required]))
    console.log(this.myArray);
  }

  removeElement(index : number){
    this.myArray.controls.splice(index, 1)
  }


  submit(){
    let value : string[] = this.myFormGroup.value['array']
    console.log(value);

  }

  customValidator() : ValidatorFn | null {
    return (control : AbstractControl) => {

      const value : string = control.value as string

        if(value.includes('a')){
          return null
        }
        return {messageError : "l'element doit contenir un 'a'"}
    }
  }
}
