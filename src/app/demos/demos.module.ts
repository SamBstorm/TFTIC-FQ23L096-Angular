import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemonavbarComponent } from './shared/demonavbar/demonavbar.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DemonavbarComponent,
    FormsComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    ReactiveFormsModule
  ]
})
export class DemosModule { }
