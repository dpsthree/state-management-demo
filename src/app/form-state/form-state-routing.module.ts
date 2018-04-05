import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormStateComponent } from './form-state.component';

const routes: Routes = [
  { path: '', component: FormStateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormStateRoutingModule { }
