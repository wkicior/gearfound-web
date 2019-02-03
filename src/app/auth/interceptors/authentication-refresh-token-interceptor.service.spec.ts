import { TestBed } from '@angular/core/testing';

import { AuthenticationRefreshTokenInterceptor } from './authentication-refresh-token-interceptor.service';

describe('AuthenticationRefreshTokenInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationRefreshTokenInterceptor = TestBed.get(AuthenticationRefreshTokenInterceptor);
    expect(service).toBeTruthy();
  });
});
