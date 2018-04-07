import { Injectable } from '@angular/core';
import { Product } from './service-state.types';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ServiceStateService {

  private cart: Product[] = [];
  productList: Product[] = [{
    name: 'Apple',
    description: 'Deliciout Red'
  }, {
    name: 'Tea',
    description: 'Earl Grey'
  }, {
    name: 'Biscuits',
    description: 'light and fluffy'
  }, {
    name: 'Eggs',
    description: 'Grade A Large'
  }, {
    name: 'Milk',
    description: '2%, Chocolate'
  }];

  shoppingCart = new BehaviorSubject(this.cart);
  constructor() { }

  addProductToCart(product: Product) {
    this.cart.push(product);
    this.shoppingCart.next(this.cart);
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
    this.shoppingCart.next(this.cart);
  }
}
