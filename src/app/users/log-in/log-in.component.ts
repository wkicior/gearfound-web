import { Component, OnInit } from '@angular/core';
import {LogInForm} from "./log-in-form";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../auth/authentication.service";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loginForm = new LogInForm();

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
      .subscribe(() => this.router.navigate(['/']),
        () => {
          this.loginForm.controls['email'].setErrors({'loginFailed': true});
          this.loginForm.controls['password'].setErrors({'loginFailed': true});
      });
  }
}
