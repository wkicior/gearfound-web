import { Component, OnInit } from '@angular/core';
import {LogInForm} from "./log-in-form";
import {TokenService} from "../../auth/token.service";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loginForm = new LogInForm()

  constructor(private authenticationService: TokenService) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.getTokenExchange(this.loginForm.get('email').value, this.loginForm.get('password').value)
      .subscribe(value => console.log(value));
    console.log('login');
  }
}
