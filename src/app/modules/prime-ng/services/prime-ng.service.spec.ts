import { TestBed, inject } from '@angular/core/testing';

import { PrimeNgService } from './prime-ng.service';

describe('PrimeNgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrimeNgService]
    });
  });

  it('should be created', inject([PrimeNgService], (service: PrimeNgService) => {
    expect(service).toBeTruthy();
  }));
});
