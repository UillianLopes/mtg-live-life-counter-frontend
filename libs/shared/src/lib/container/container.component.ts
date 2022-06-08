import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { ContainerStore } from './container.state';

@Component({
  selector: 'mtg-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [ContainerStore],
})
export class ContainerComponent {
  @Input()
  set isLoading(isLoading: boolean) {
    this._store.setIsLoading(isLoading);
  }
  @Input()
  set fluid(fluid: boolean) {
    this._store.setFluid(fluid);
  }

  public readonly isLoading$ = this._store.isLoading$;
  public readonly fluid$ = this._store.fluid$;
  public readonly notFluid$ = this._store.fluid$.pipe(map((fluid) => !fluid));

  constructor(private readonly _store: ContainerStore) {}
}
