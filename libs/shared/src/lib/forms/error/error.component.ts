import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtg-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  host: {
    class: 'mtg-error invalid-feedback',
  },
  encapsulation: ViewEncapsulation.None,
})
export class ErrorComponent {}
