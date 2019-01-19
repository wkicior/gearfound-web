import { TestBed } from '@angular/core/testing';

import { AuthenticationTokenInterceptorService } from './authentication-token-interceptor.service';

describe('AuthenticationTokenInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationTokenInterceptorService = TestBed.get(AuthenticationTokenInterceptorService);
    expect(service).toBeTruthy();
  });
});
