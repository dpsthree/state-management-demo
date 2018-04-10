import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgrxStateComponent } from './ngrx-state.component';
import { NgrxStateRoutingModule } from './ngrx-state-routing.module';
import { NgrxProductListComponent } from './ngrx-product-list/ngrx-product-list.component';
import { NgrxShoppingCartComponent } from './ngrx-shopping-cart/ngrx-shopping-cart.component';
import { NgrxStateService } from './ngrx-state.service';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    NgrxStateRoutingModule
  ],
  providers: [NgrxStateService],
  declarations: [NgrxStateComponent, NgrxProductListComponent, NgrxShoppingCartComponent]
})
export class NgrxStateModule { }
