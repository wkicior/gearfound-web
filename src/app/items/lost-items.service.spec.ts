import { TestBed } from '@angular/core/testing';

import { LostItemService } from './lost-item.service';

describe('LostItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LostItemService = TestBed.get(LostItemService);
    expect(service).toBeTruthy();
  });
});
