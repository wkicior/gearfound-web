import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";
import {take, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log(next.url.toString());
    return this.authenticationService.isAuthenticated().pipe(
      take(1),
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/log-in', {'navigateTo': next.url}]);
        }
      })
    );
  }
}
