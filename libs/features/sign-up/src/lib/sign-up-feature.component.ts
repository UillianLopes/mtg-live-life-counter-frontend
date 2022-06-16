import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mtg-sign-up-feature',
  templateUrl: './sign-up-feature.component.html',
  styleUrls: ['./sign-up-feature.component.scss'],
})
export class SignUpFeatureComponent implements OnInit {
  public readonly form = this._formBuilder.group({
    username: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    password: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    email: new FormControl<string>('', {
      validators: [Validators.required, Validators.email],
    }),
  });

  constructor(private readonly _formBuilder: FormBuilder) {}

  public ngOnInit(): void {}
}
