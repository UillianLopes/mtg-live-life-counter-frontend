import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtg-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  host: {
    class: 'mb-3',
  },
  encapsulation: ViewEncapsulation.None,
})
export class FormFieldComponent {}
