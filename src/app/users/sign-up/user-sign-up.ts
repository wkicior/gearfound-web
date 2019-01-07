import {SignUpForm} from "./sign-up-form";

export class UserSignUp {
  constructor(email: string, password: string) {}

  static fromSignUpForm(form: SignUpForm): UserSignUp {
    return new UserSignUp(form.get('email').value, form.get('password').value);
  }
}
