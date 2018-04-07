import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceStateComponent } from './service-state.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: ServiceStateComponent },
  { path: 'cart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceStateRoutingModule { }
