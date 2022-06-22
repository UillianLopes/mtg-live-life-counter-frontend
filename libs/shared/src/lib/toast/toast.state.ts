import { Inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ToastConfig, TOAST_CONFIG } from './toast.config';

export interface ToastState {
  config: ToastConfig;
}

@Injectable()
export class ToastStore extends ComponentStore<ToastState> {
  public readonly config$ = this.select(({ config }) => config);

  public readonly title$ = this.select(this.config$, ({ title }) => title);
  public readonly message$ = this.select(
    this.config$,
    ({ message }) => message
  );
  public readonly color$ = this.select(this.config$, ({ color }) => color);

  constructor(@Inject(TOAST_CONFIG) config: ToastConfig) {
    super({ config });
  }

  public readonly setConfig = this.updater((state, config: ToastConfig) => ({
    ...state,
    config,
  }));
}
