import { TestBed, inject } from '@angular/core/testing';

import { TemporalStateService } from './temporal-state.service';

describe('TemporalStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemporalStateService]
    });
  });

  it('should be created', inject([TemporalStateService], (service: TemporalStateService) => {
    expect(service).toBeTruthy();
  }));
});
