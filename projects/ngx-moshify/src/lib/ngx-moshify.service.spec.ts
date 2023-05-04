import { TestBed } from '@angular/core/testing';

import { NgxMoshifyService } from './ngx-moshify.service';

describe('NgxMoshifyService', () => {
  let service: NgxMoshifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMoshifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
