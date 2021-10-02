import { TestBed } from '@angular/core/testing';

import { ConectToFireBaseService } from './conect-to-fire-base.service';

describe('ConectToFireBaseService', () => {
  let service: ConectToFireBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectToFireBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
