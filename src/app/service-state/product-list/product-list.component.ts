import { Component } from '@angular/core';
import { ServiceStateService } from '../service-state.service';

@Component({
  selector: 'smd-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = this.serviceStateService.productList;
  constructor(private serviceStateService: ServiceStateService) {}

}
