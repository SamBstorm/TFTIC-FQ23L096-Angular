import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(private _router : Router) {


  }

  DetailParam! : string

  ToDetails(){

    this._router.navigate(['../user', this.DetailParam])

  }

}
