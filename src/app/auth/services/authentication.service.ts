import { Injectable } from '@angular/core';
import {TokenService} from "./token.service";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {catchError, map, share, switchMap, tap} from "rxjs/operators";
import {TokenPasswordExchange} from "../model/token-password-exchange";
import {SessionStorageService} from "../../storage/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private exchangeToken$: Subject<TokenPasswordExchange> = new BehaviorSubject(null);

  constructor(private tokenService: TokenService, private sessionStorageService: SessionStorageService) { }

  login(email: string, password: string): Observable<void> {
    return this.tokenService.getTokenExchange(email.toLowerCase(), password).pipe(
      tap(exchangeToken => this.storeToken(exchangeToken)),
      switchMap(() => of(undefined))
    );
  }

  public accessToken(): Observable<string> {
    return this.exchangeToken$.asObservable().pipe(
      share(),
      switchMap(exchangeToken => exchangeToken === null && this.sessionStorageService.session.refreshToken ? this.refreshToken() : of(exchangeToken)),
      map(exchangeToken => exchangeToken === null ? null : exchangeToken.access_token)
    );
  }

  public refreshToken(): Observable<TokenPasswordExchange> {
    return this.tokenService.refreshToken(this.sessionStorageService.session.refreshToken).pipe(
      tap(exchangeToken => this.storeToken(exchangeToken)),
      catchError(err => {
        this.invalidateSession();
        throw(err);
      })
    );
  }

  private invalidateSession() {
    console.log('invalidating session');
    this.sessionStorageService.cleanSession();
    this.exchangeToken$.next(null);
  }

  private storeToken(exchangeToken: TokenPasswordExchange) {
    this.exchangeToken$.next(exchangeToken);
    this.sessionStorageService.session.refreshToken = exchangeToken === null ? null : exchangeToken.refresh_token
    this.sessionStorageService.persist();
  }

  isAuthenticated(): Observable<boolean> {
    return this.accessToken().pipe(map(token => token !== null));
  }

  logout() {
    this.invalidateSession();
  }
}
