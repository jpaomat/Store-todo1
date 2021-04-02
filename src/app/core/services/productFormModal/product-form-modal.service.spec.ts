import { TestBed } from '@angular/core/testing';

import { ProductFormModalService } from './product-form-modal.service';

describe('ProductFormModalService', () => {
  let service: ProductFormModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFormModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
