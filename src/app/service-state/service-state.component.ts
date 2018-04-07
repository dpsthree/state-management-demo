import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { ServiceStateService } from './service-state.service';

@Component({
  selector: 'smd-service-state',
  templateUrl: './service-state.component.html',
  styleUrls: ['./service-state.component.css']
})
export class ServiceStateComponent {

  cartSize: Observable<number>;
  constructor(serviceStateService: ServiceStateService) {
    this.cartSize = serviceStateService.shoppingCart
      .pipe(
        map(cart => cart.length)
      );
  }
}
