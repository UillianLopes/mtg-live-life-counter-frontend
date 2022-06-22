import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationStoreFacade } from '@mtg-live-life-counter/stores/authentication';

@Component({
  selector: 'mtg-sign-in-feature',
  templateUrl: './sign-in-feature.component.html',
  styleUrls: ['./sign-in-feature.component.scss'],
})
export class SignInFeatureComponent implements OnInit {
  public readonly form = this._formBuilder.group({
    username: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    password: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _authenticationFacade: AuthenticationStoreFacade
  ) {}

  public ngOnInit(): void {}

  public signIn(): void {
    this._authenticationFacade.authenticate(this.form.value);
  }
}
