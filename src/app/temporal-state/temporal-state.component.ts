import { Component } from '@angular/core';
import { TemporalStateService } from './temporal-state.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'smd-temporal-state',
  templateUrl: './temporal-state.component.html',
  styleUrls: ['./temporal-state.component.css']
})
export class TemporalStateComponent {

  list: Observable<string[]>;
  count: Observable<number>;
  constructor(temporalStateService: TemporalStateService) {
    this.list = temporalStateService.loggedInUserList;

    this.count = temporalStateService.loggedInUserList
      .pipe(
        map(list => list.length)
      );
  }


}
