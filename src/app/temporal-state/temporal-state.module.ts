import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemporalStateRoutingModule } from './temporal-state-routing.module';
import { TemporalStateComponent } from './temporal-state.component';
import { MatListModule } from '@angular/material';
import { TemporalStateService } from './temporal-state.service';
import { DataFetcherService } from './data-fetcher.service';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    TemporalStateRoutingModule
  ],
  declarations: [TemporalStateComponent],
  providers: [
    TemporalStateService,
    DataFetcherService
  ]
})
export class TemporalStateModule { }
