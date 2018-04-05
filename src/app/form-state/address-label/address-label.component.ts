import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'smd-address-label',
  templateUrl: './address-label.component.html',
  styleUrls: ['./address-label.component.css']
})
export class AddressLabelComponent {
  @Input() addressForm: FormGroup;
}
