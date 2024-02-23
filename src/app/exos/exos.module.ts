import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { ParentComponent } from './components/parent/parent.component';
import { EnfantComponent } from './components/enfant/enfant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './components/forms/forms.component';
import { ExonavbarComponent } from './shared/exonavbar/exonavbar.component';


@NgModule({
  declarations: [
    ParentComponent,
    EnfantComponent,
    FormsComponent,
    ExonavbarComponent
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExosModule { }
