import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Color } from '../@types';

export interface HeaderState {
  color: Color;
}

@Injectable()
export class HeaderStore extends ComponentStore<HeaderState> {
  public readonly color$ = this.select(({ color }) => color);

  constructor() {
    super({ color: 'primary' });
  }

  public readonly setColor = this.updater((state, color: Color) => ({
    ...state,
    color,
  }));
}
