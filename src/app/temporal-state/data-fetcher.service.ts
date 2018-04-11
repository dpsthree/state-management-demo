import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
/**
 * Emulates a data store that changes over time
 * For example, this could be a socket connection providing live updates about the
 * currently logged in users
 */
@Injectable()
export class DataFetcherService {

  private list: string[] = [];
  loggedInUsers: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.list.push(faker.name.findName() + ' ' + faker.name.lastName());
    }

    this.loggedInUsers.next(this.list);

    setInterval(() => {
      if (Math.floor(Math.random() * 100) > 50) {
        this.list.push(faker.name.findName() + ' ' + faker.name.lastName());
      } else {
        this.list.splice(this.list.length - 1, 1);
      }
      this.loggedInUsers.next(this.list);
    }, 1000);
  }

}
