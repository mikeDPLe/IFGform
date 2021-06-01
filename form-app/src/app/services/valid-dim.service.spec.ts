import { TestBed } from '@angular/core/testing';

import { ValidDimService } from './valid-dim.service';

describe('ValidDimService', () => {
  let service: ValidDimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidDimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
