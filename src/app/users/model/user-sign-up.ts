import {SignUpForm} from "../components/sign-up/sign-up-form";

export class UserSignUp {
  constructor(public email: string, public password: string) {}

  static fromSignUpForm(form: SignUpForm): UserSignUp {
    const email: string = form.get('email').value;
    return new UserSignUp(email.toLowerCase(), form.get('password').value);
  }
}
