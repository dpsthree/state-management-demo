import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgrxStateComponent } from './ngrx-state.component';
import { NgrxShoppingCartComponent } from './ngrx-shopping-cart/ngrx-shopping-cart.component';

const routes: Routes = [
  { path: '', component: NgrxStateComponent  },
  { path: 'cart', component: NgrxShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxStateRoutingModule { }
