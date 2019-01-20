import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.httpClient.post<TokenPasswordExchange>('http://localhost:8080/api/oauth/token', body.toString(), options);
  }

  public refreshToken(refreshToken: string) : Observable<TokenPasswordExchange> {
    const body = new URLSearchParams();
    body.set('refresh_token', refreshToken);
    body.set('grant_type', 'refresh_token');
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.httpClient.post<TokenPasswordExchange>('http://localhost:8080/api/oauth/token', body.toString(), options);
  }
}
