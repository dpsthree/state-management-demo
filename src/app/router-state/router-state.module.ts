import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule, MatCardModule } from '@angular/material';

import { RouterStateRoutingModule } from './router-state-routing.module';
import { RouterStateComponent } from './router-state.component';
import { MasterListComponent } from './master-list/master-list.component';
import { RouterStateService } from './router-state.service';
import { VideoDetailComponent } from './video-detail/video-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    RouterStateRoutingModule,
  ],
  declarations: [
    RouterStateComponent,
    MasterListComponent,
    VideoDetailComponent
  ],
  providers: [RouterStateService]
})
export class RouterStateModule { }
