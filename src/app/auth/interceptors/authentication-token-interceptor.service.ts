import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "../services/authentication.service";
import {map, switchMap, take} from "rxjs/operators";

export const TOKEN_INTERCEPTOR_URL_WHITELIST =
  new InjectionToken<string[]>('token-interceptor-url-whitelist');

@Injectable()
export class AuthenticationTokenInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService, @Inject(TOKEN_INTERCEPTOR_URL_WHITELIST) private urlWhitelist: string[]) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.requestOnTokenSupported(request)) {
      return this.authenticationService.isAuthenticated().pipe(
        take(1),
        switchMap(authenticated => authenticated ? this.handleAuthenticated(request, next) : next.handle(request))
      );
    } else {
      return next.handle(request);
    }
  }

  private requestOnTokenSupported(request: HttpRequest<any>): boolean {
    return this.urlWhitelist.find(uw => request.url.startsWith(uw)) !== undefined;
  }

  private handleAuthenticated(request: HttpRequest<any>, next: HttpHandler) {
    return this.authenticationService.accessToken().pipe(
      take(1),
      map(token => this.getRequestWithAuthentiationToken(request, token)),
      switchMap(authentiatedRequest => next.handle(authentiatedRequest))
    );
  }

  private getRequestWithAuthentiationToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
