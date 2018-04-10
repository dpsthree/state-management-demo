import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import { Product } from '../app.types';
import { AppState, AddItem, RemoveItem } from './state';

@Injectable()
export class NgrxStateService {
  cart: Observable<Product[]>;
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

  constructor(private store: Store<AppState>) {
    this.cart = store.pipe(select(state => state.shoppingCart));
  }

  addProductToCart(product: Product) {
    this.store.dispatch(new AddItem(product));
  }

  removeItem(index: number) {
    this.store.dispatch(new RemoveItem(index));
  }
}
