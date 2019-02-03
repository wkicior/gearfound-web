import { TestBed } from '@angular/core/testing';

import { AuthenticationTokenInterceptor } from './authentication-token-interceptor.service';

describe('AuthenticationTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationTokenInterceptor = TestBed.get(AuthenticationTokenInterceptor);
    expect(service).toBeTruthy();
  });
});
