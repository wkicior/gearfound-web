import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../auth/authentication.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  isResponsive: boolean = false;
  isAuthenticated$: Observable<boolean>

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.isAuthenticated$ = this.authenticationService.isAuthenticated();
  }

  toggle() {
   this.isResponsive = !this.isResponsive;
  }

  logout() {
    this.authenticationService.logout();
  }
}
