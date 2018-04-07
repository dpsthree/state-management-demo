import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ServiceStateRoutingModule } from './service-state-routing.module';
import { ServiceStateComponent } from './service-state.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ServiceStateService } from './service-state.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ServiceStateRoutingModule
  ],
  declarations: [ServiceStateComponent, ProductListComponent, ShoppingCartComponent],
  providers: [ServiceStateService]
})
export class ServiceStateModule { }
