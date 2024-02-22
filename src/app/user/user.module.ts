import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CreateComponent } from './create/create.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './enfant/enfant.component';


@NgModule({
  declarations: [
    CreateComponent,
    UsernavbarComponent,
    DetailsComponent,
    MainComponent,
    ParentComponent,
    EnfantComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
