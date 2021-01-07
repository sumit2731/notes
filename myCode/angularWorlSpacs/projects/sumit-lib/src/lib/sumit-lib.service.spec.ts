import { TestBed } from '@angular/core/testing';

import { SumitLibService } from './sumit-lib.service';

describe('SumitLibService', () => {
  let service: SumitLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumitLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
