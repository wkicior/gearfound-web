import {FormControl, FormGroup, Validators} from "@angular/forms";

export class FoundItemForm extends FormGroup {

  constructor() {
    super({
      serialNumber: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      foundPlace: new FormControl(''),
      foundDate: new FormControl(''),
      description: new FormControl('')
    })
  }
}
