import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TokenPasswordExchange} from "./token-password-exchange";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private httpClient: HttpClient) { }

  public getTokenExchange(email: string, password: string): Observable<TokenPasswordExchange> {
    const body = new URLSearchParams();
    body.set('username', email);
    body.set('password', password);
    body.set('grant_type', 'password');
    return this.httpClient.post<TokenPasswordExchange>('http://localhost:8080/api/oauth/token', body);
  }
}
