import { Component } from '@angular/core';
import { map } from 'rxjs';

import { ToastStore } from './toast.state';

export const COLOR_CLASSES = new Map([
  ['primary', ['bg-primary', 'text-white']],
  ['success', ['bg-success', 'text-white']],
  ['warning', ['bg-warning', 'text-dark']],
  ['danger', ['bg-danger', 'text-white']],
  ['info', ['bg-info', 'text-white']],
  ['light', ['bg-light', 'text-dark']],
  ['dark', ['bg-dark', 'text-white']],
]);

@Component({
  selector: 'mtg-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  providers: [ToastStore],
})
export class ToastComponent {
  public readonly title$ = this._store.title$;
  public readonly message$ = this._store.message$;
  public readonly color$ = this._store.color$;
  public readonly class$ = this.color$.pipe(
    map((color) => COLOR_CLASSES.get(color))
  );

  constructor(private readonly _store: ToastStore) {}
}
