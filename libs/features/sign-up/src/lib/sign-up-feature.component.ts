import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { markControlAsDirty } from '@mtg-live-life-counter/core';
import { SignUpStoreFacade } from '@mtg-live-life-counter/stores/sign-up';

@Component({
  selector: 'mtg-sign-up-feature',
  templateUrl: './sign-up-feature.component.html',
  styleUrls: ['./sign-up-feature.component.scss'],
})
export class SignUpFeatureComponent implements OnInit {
  public readonly form = this._formBuilder.group({
    username: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    password: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: new FormControl<string>('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
  });

  public readonly isCreatingUser$ = this._signUpStoreFacade.isCreatingUser$;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _signUpStoreFacade: SignUpStoreFacade
  ) {}

  public createUser(): void {
    if (this.form.invalid) {
      markControlAsDirty(this.form);
      return;
    }

    this._signUpStoreFacade.createUser(this.form.value);
  }

  public ngOnInit(): void {}
}
