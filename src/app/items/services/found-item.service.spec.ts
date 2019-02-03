import { TestBed } from '@angular/core/testing';

import { FoundItemService } from './found-item.service';

describe('FoundItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoundItemService = TestBed.get(FoundItemService);
    expect(service).toBeTruthy();
  });
});
