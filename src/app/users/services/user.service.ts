import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {UserAuthInfo} from "../model/user-auth-info";
import {pluck, share, switchMap, take} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userInfo$: Subject<UserAuthInfo> = new BehaviorSubject(null);

  public userInfo(): Observable<UserAuthInfo> {
    return this.userInfo$.asObservable().pipe(
      share(),
      switchMap(userInfo => userInfo === null ? this.getUserInfo() : of(userInfo)),
    );
  }

  public getUserId(): Observable<String> {
    return this.userInfo().pipe(
      take(1),
      pluck('id')
    );
  }

  constructor(private http: HttpClient) { }

  private getUserInfo(): Observable<UserAuthInfo> {
    return this.http.get<UserAuthInfo>("http://localhost:8090/user");
  }
}
