import { TestBed } from '@angular/core/testing';

import { SbLegendreLibService } from './sb-legendre-lib.service';

describe('SbLegendreLibService', () => {
  let service: SbLegendreLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SbLegendreLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
