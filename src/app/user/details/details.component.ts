import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  param! : string;

  constructor(private _activatedRoute : ActivatedRoute) {


    this.param = this._activatedRoute.snapshot.params['id']


  }

}
