import { TestBed } from '@angular/core/testing';

import { SumitNg6LibService } from './sumit-ng6-lib.service';

describe('SumitNg6LibService', () => {
  let service: SumitNg6LibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumitNg6LibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
