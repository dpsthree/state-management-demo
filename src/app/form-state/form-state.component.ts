import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'smd-form-state',
  templateUrl: './form-state.component.html',
  styleUrls: ['./form-state.component.css']
})
export class FormStateComponent {

  addressForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.addressForm = formBuilder.group({
      name: ['', Validators.required],
      streetAddressOne: ['', Validators.required],
      streetAddressTwo: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    });
  }

}
