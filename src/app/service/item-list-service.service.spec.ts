import { TestBed, inject } from '@angular/core/testing';

import { ItemListServiceService } from './item-list-service.service';

describe('ItemListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemListServiceService]
    });
  });

  it('should be created', inject([ItemListServiceService], (service: ItemListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
