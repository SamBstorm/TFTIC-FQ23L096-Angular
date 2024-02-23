import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'user', loadChildren : () => import('./user/user.module').then(m => m.UserModule)},
  {path : 'exos', loadChildren : () => import('./exos/exos.module').then(m => m.ExosModule)},
  {path : '**', redirectTo : 'user'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
