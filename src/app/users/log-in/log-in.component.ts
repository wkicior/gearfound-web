import { Component, OnInit } from '@angular/core';
import {LoginFailedErrorStateMatcher, LogInForm} from "./log-in-form";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../auth/authentication.service";
import {ErrorStateMatcher} from "@angular/material";
import {FormControl, FormGroupDirective, NgForm} from "@angular/forms";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loginForm = new LogInForm();
  private navigateTo: string;

  constructor(private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.navigateTo = this.route.snapshot.paramMap.get('navigateTo') || '/';
    console.log(this.navigateTo)
  }

  login() {
    this.authenticationService.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
      .subscribe(() => this.router.navigateByUrl(this.navigateTo),
        () => {
        this.loginForm.setErrors({'loginFailed': true});
      });
  }
}
