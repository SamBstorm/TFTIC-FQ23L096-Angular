import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemonavbarComponent } from './shared/demonavbar/demonavbar.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  {path : '', component : DemonavbarComponent, children : [{
    path : 'forms', component : FormsComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
