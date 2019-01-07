import { Component, OnInit } from '@angular/core';
import {LogInForm} from "./log-in-form";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loginForm = new LogInForm()

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log('login');
  }
}
