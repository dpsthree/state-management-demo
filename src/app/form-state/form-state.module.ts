import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

import { FormStateRoutingModule } from './form-state-routing.module';
import { FormStateComponent } from './form-state.component';
import { AddressLabelComponent } from './address-label/address-label.component';
import { AddressEntryComponent } from './address-entry/address-entry.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormStateRoutingModule
  ],
  declarations: [
    FormStateComponent,
    AddressEntryComponent,
    AddressLabelComponent
  ]
})
export class FormStateModule { }
