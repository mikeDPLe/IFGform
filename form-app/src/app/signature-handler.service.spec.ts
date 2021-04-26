import { TestBed } from '@angular/core/testing';

import { SignatureHandlerService } from './signature-handler.service';

describe('SignatureHandlerService', () => {
  let service: SignatureHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignatureHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
