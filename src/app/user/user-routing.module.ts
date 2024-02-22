import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main/main.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path : '', component : UsernavbarComponent, children : [
    {path : '', component : MainComponent},
    {path : 'create', component : CreateComponent},
    {path : 'parent', component : ParentComponent},
    {path : ':id', component : DetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
