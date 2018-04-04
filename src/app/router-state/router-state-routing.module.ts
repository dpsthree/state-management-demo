import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterStateComponent } from './router-state.component';

const routes: Routes = [
  { path: '', component: RouterStateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterStateRoutingModule { }
