import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NgrxStateService } from '../ngrx-state.service';
import { Product } from '../../app.types';

@Component({
  selector: 'smd-ngrx-shopping-cart',
  templateUrl: './ngrx-shopping-cart.component.html',
  styleUrls: ['./ngrx-shopping-cart.component.css']
})
export class NgrxShoppingCartComponent {

  cartList: Observable<Product[]>;
  constructor(private ngrxStateService: NgrxStateService) {
    this.cartList = ngrxStateService.cart;
  }

  removeItem(index: number) {
    this.ngrxStateService.removeItem(index);
  }

}
