import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtg-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mtg-form-field mb-3',
  },
})
export class FormFieldComponent {}
