import {FormControl, FormGroup, Validators} from "@angular/forms";

export class LogInForm extends FormGroup {
  constructor() {
    super({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('')
    });
  }
}
