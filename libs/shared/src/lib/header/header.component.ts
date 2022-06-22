import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { HeaderStore } from './header.state';
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
  selector: 'mtg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HeaderStore],
})
export class HeaderComponent implements OnInit {
  public readonly color$ = this._store.color$;
  public readonly class$ = this.color$.pipe(
    map((color) => COLOR_CLASSES.get(color))
  );

  constructor(private readonly _store: HeaderStore) {}

  public ngOnInit(): void {}
}
