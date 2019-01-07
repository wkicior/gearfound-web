import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material";

export class PasswordRepeatStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return (control && control.parent.get('password').value !== control.parent.get('passwordRepeat').value && control.dirty)
  }
}

export class SignUpForm extends FormGroup {
  passwordRepeatStateMatcher = new PasswordRepeatStateMatcher();

  constructor() {
    super({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(''),
      passwordRepeat: new FormControl(''),
    }, {validators: SignUpForm.checkPasswords})
  }

  static checkPasswords(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.passwordRepeat.value;

    return pass === confirmPass ? null : { passwordsDoNotMatch: true }
  }
}
