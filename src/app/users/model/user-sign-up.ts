import {SignUpForm} from "../components/sign-up/sign-up-form";

export class UserSignUp {
  constructor(public email: string, public password: string) {}

  static fromSignUpForm(form: SignUpForm): UserSignUp {
    return new UserSignUp(form.get('email').value, form.get('password').value);
  }
}
