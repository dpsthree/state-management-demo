import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceStateComponent } from './service-state.component';

const routes: Routes = [
  { path: '', component: ServiceStateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceStateRoutingModule { }
