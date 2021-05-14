import { TestBed } from '@angular/core/testing';

import { ImageHolderService } from './image-holder.service';

describe('ImageHolderService', () => {
  let service: ImageHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
