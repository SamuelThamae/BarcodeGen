import { TestBed } from '@angular/core/testing';

import { BarcodeService } from '../services/barcode.service';

describe('BarcodeServiceService', () => {
  let service: BarcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
