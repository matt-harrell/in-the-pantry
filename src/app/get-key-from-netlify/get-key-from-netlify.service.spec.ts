import { TestBed } from '@angular/core/testing';

import { GetKeyFromNetlifyService } from './get-key-from-netlify.service';

describe('GetKeyFromNetlifyService', () => {
  let service: GetKeyFromNetlifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetKeyFromNetlifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
