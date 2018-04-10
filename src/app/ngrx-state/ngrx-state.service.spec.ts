import { TestBed, inject } from '@angular/core/testing';

import { NgrxStateService } from './ngrx-state.service';

describe('NgrxStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgrxStateService]
    });
  });

  it('should be created', inject([NgrxStateService], (service: NgrxStateService) => {
    expect(service).toBeTruthy();
  }));
});
