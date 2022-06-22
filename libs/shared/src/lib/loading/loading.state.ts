import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface LoadingState {
  show: boolean;
}

@Injectable()
export class LoadingStore extends ComponentStore<LoadingState> {
  public readonly show$ = this.select(({ show }) => show);

  constructor() {
    super({ show: false });
  }

  public readonly setShow = this.updater((state, show: boolean) => ({
    ...state,
    show,
  }));
}
