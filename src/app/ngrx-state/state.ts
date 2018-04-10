import { Action } from '@ngrx/store';

import { Product } from '../app.types';

export interface AppState {
  shoppingCart: Product[];
}

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

export function shoppingCartReducer(cart: Product[] = [], action: Action): Product[] {
  const newCart: Product[] = [...cart];
  switch (action.type) {
    case ADD_ITEM:
      const newItem = (action as AddItem).item;
      newCart.push(newItem);
      return newCart;
    case REMOVE_ITEM:
      const index = (action as RemoveItem).index;
      newCart.splice(index, 1);
      return newCart;
    default:
      return cart;
  }
}

export class AddItem implements Action {
  type = ADD_ITEM;
  constructor(public item: Product) { }
}

export class RemoveItem implements Action {
  type = REMOVE_ITEM;
  constructor(public index: number) { }
}
