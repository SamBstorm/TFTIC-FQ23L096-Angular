import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { ParentComponent } from './components/parent/parent.component';
import { EnfantComponent } from './components/enfant/enfant.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParentComponent,
    EnfantComponent
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    FormsModule
  ]
})
export class ExosModule { }
