import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mtg-sign-in-feature',
  templateUrl: './sign-in-feature.component.html',
  styleUrls: ['./sign-in-feature.component.scss'],
})
export class SignInFeatureComponent implements OnInit {
  public readonly form = this._formBuilder.group({
    username: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    password: new FormControl<string>('', {
      validators: [Validators.required],
    }),
  });

  constructor(private readonly _formBuilder: FormBuilder) {}

  public ngOnInit(): void {}
}
