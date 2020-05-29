import { TestBed } from '@angular/core/testing';

import { HttpClientPostService } from './http-client-post.service';

describe('HttpClientPostService', () => {
  let service: HttpClientPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
