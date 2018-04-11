import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataFetcherService } from './data-fetcher.service';

@Injectable()
export class TemporalStateService {

  loggedInUserList: Observable<string[]>;
  constructor(dataFetcher: DataFetcherService) {
    // Pretend this is talking to a socket connection
    this.loggedInUserList = dataFetcher.loggedInUsers;
  }

}
