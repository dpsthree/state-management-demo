import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { NgrxStateService } from '../ngrx-state.service';
import { Product } from '../../app.types';
import { AppState, AddItem } from '../state';

@Component({
  selector: 'smd-ngrx-product-list',
  templateUrl: './ngrx-product-list.component.html',
  styleUrls: ['./ngrx-product-list.component.css']
})
export class NgrxProductListComponent {

  products: Product[];
  constructor(ngrxStateService: NgrxStateService, private store: Store<AppState>) {
    this.products = ngrxStateService.productList;
  }

  addProduct(product: Product) {
    this.store.dispatch(new AddItem(product));
  }

}
