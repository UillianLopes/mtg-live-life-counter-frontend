import { Component, Input } from '@angular/core';
import { LoadingStore } from './loading.state';

@Component({
  selector: 'mtg-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  providers: [LoadingStore],
})
export class LoadingComponent {
  @Input()
  public set show(show: boolean) {
    this._store.setShow(show);
  }

  public readonly show$ = this._store.show$;

  constructor(private readonly _store: LoadingStore) {}
}
