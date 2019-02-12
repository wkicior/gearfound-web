import { Component, OnInit } from '@angular/core';
import {SignUpService} from "../../services/sign-up.service";
import {SignUpForm} from "./sign-up-form";
import {UserSignUp} from "../../model/user-sign-up";
import {Router} from "@angular/router";



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userForm = new SignUpForm();

  constructor(private signUpService: SignUpService, private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.signUpService.signUp(UserSignUp.fromSignUpForm(this.userForm)).subscribe(
      () => this.router.navigate(['/log-in']),
      () => {this.userForm.controls['email'].setErrors({'duplicate': true})}
    );
  }
}
