import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";
import {map, switchMap, take} from "rxjs/operators";

@Injectable()
export class AuthenticationTokenInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.startsWith('http://localhost:8080/api/items')) {
      return next.handle(request);
    }
    return this.authenticationService.isAuthenticated().pipe(
      take(1),
      switchMap(authenticated => authenticated ? this.handleAuthenticated(request, next) : next.handle(request))
    );
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
