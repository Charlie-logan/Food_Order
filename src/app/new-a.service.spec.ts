import { TestBed } from '@angular/core/testing';

import { NewAService } from './new-a.service';

describe('NewAService', () => {
  let service: NewAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
