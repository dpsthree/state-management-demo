import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemporalStateComponent } from './temporal-state.component';

const routes: Routes = [
  { path: '', component: TemporalStateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemporalStateRoutingModule { }
