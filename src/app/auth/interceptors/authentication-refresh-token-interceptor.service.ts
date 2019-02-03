import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthenticationService} from "../services/authentication.service";
import {Observable} from "rxjs";
import {catchError, switchMap} from "rxjs/operators";
import {TOKEN_INTERCEPTOR_URL_WHITELIST} from "./authentication-token-interceptor.service";


@Injectable()
export class AuthenticationRefreshTokenInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService, @Inject(TOKEN_INTERCEPTOR_URL_WHITELIST) private urlWhitelist: string[]) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(error => {
        console.log('will retry? : ' + error.status + ' ' + this.requestOnTokenSupported(request));
        if (error.status === 401 && this.requestOnTokenSupported(request)) {
          return this.refreshTokenAndRetry(next, request);
        }
        throw(error);
      })
    );
  }

  private refreshTokenAndRetry(next: HttpHandler, request: HttpRequest<any>) {
    return this.authenticationService.refreshToken().pipe(
      switchMap(() => next.handle(request)),
      catchError(e => {
        this.authenticationService.logout();
        throw(e);
      })
    );
  }

  private requestOnTokenSupported(request: HttpRequest<any>): boolean {
    return this.urlWhitelist.find(uw => request.url.startsWith(uw)) !== undefined;
  }
}
