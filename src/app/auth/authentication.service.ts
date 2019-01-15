import { Injectable } from '@angular/core';
import {TokenService} from "./token.service";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";
import {TokenPasswordExchange} from "./token-password-exchange";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  exchangeToken$: Subject<TokenPasswordExchange> = new BehaviorSubject(null);

  constructor(private tokenService: TokenService) { }

  login(email: string, password: string): Observable<void> {
    return this.tokenService.getTokenExchange(email, password).pipe(
      tap(exchangeToken => this.exchangeToken$.next(exchangeToken)),
      switchMap(() => of(undefined))
    );
  }

  isAuthenticated(): Observable<boolean> {
    return this.exchangeToken$.asObservable().pipe(map(token => token !== null))
  }
}
