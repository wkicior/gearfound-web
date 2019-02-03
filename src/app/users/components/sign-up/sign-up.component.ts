import { Component, OnInit } from '@angular/core';
import {SignUpService} from "../../services/sign-up.service";
import {SignUpForm} from "./sign-up-form";
import {UserSignUp} from "../../model/user-sign-up";



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userForm = new SignUpForm();

  constructor(private signUpService: SignUpService) { }

  ngOnInit() {
  }

  save() {
    this.signUpService.signUp(UserSignUp.fromSignUpForm(this.userForm)).subscribe(
      () => console.log('user subscribed'),
      () => {this.userForm.controls['email'].setErrors({'duplicate': true})}
    );
  }
}
