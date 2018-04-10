import { Component } from '@angular/core';

import { NgrxStateService } from './ngrx-state.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'smd-ngrx-state',
  templateUrl: './ngrx-state.component.html',
  styleUrls: ['./ngrx-state.component.css']
})
export class NgrxStateComponent {

  cartSize: Observable<number>;

  constructor(ngrxStateService: NgrxStateService) {
    this.cartSize = ngrxStateService.cart
      .pipe(
        map(cart => cart.length)
      );
  }
}
