import {
  AbstractControl,
  FormControl,
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';

export function markControlAsDirty(control: AbstractControl) {
  if (control instanceof FormControl || control instanceof UntypedFormControl) {
    control.markAsDirty();
    control.updateValueAndValidity();
    return;
  }

  if (control instanceof UntypedFormGroup || control instanceof FormGroup) {
    for (const key of Object.keys(control.controls)) {
      markControlAsDirty(control.controls[key]);
    }
    return;
  }
}
