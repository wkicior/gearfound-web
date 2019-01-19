import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {iif, Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";
import {map, mergeMap, switchMap, take} from "rxjs/operators";

@Injectable()
export class AuthenticationTokenInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authenticationService.isAuthenticated().pipe(
      take(1),
      switchMap(authenticated => authenticated ? this.handleAuthenticated(request, next) : next.handle(request))
    );
  }

  private handleAuthenticated(request: HttpRequest<any>, next: HttpHandler) {
    console.log('handle authenticated')
    return this.authenticationService.exchangeToken$.pipe(
      take(1),
      map(token => this.getRequestWithAuthentiationToken(request, token)),
      switchMap(authentiatedRequest => next.handle(authentiatedRequest))
    );
  }

  private getRequestWithAuthentiationToken(request: HttpRequest<any>, token) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token.access_token}`
      }
    });
  }
}
