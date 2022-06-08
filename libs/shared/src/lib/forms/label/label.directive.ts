import { Directive } from '@angular/core';

@Directive({
  selector: '[mtgLabel]',
  host: {
    class: 'form-label',
  },
})
export class LabelDirective {}
