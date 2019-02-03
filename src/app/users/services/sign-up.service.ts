import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserSignUp} from "../model/user-sign-up";
import {UserAuthInfo} from "../model/user-auth-info";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  signUp(user: UserSignUp): Observable<UserAuthInfo> {
    return this.http.post<UserAuthInfo>("http://localhost:8090/user", user);
  }
}
