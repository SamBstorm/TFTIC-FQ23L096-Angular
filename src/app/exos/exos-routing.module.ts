import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { ExonavbarComponent } from './shared/exonavbar/exonavbar.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  {path : '', component : ExonavbarComponent, children : [
    {path : 'service', component : ParentComponent},
    {path : 'forms', component : FormsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { }
