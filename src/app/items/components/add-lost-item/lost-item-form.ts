import {FormControl, FormGroup, Validators} from "@angular/forms";

export class LostItemForm extends FormGroup {
  id: string;

  constructor() {
    super({
      serialNumber: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      lostPlace: new FormControl(''),
      lostDate: new FormControl(''),
      description: new FormControl('')
    })
  }
}
