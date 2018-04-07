import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ServiceStateService } from '../service-state.service';
import { Product } from '../service-state.types';

@Component({
  selector: 'smd-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  cartList: Observable<Product[]>;
  constructor(private serviceStateService: ServiceStateService) {
    this.cartList = serviceStateService.shoppingCart;
  }

  removeItem(i: number) {
    this.serviceStateService.removeItem(i);
  }

}
