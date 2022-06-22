import { ElementRef, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Color } from '../@types';
import { Size } from '../@types/size.type';
import { ButtonAppearance } from './button-appearance.type';

export interface ButtonState {
  isLoading: boolean;
  color: Color;
  appearance: ButtonAppearance;
  disabled: boolean;
  size?: Size;
}

@Injectable()
export class ButtonStore extends ComponentStore<ButtonState> {
  public readonly isLoading$ = this.select(({ isLoading }) => isLoading);
  public readonly color$ = this.select(({ color }) => color);
  public readonly size$ = this.select(({ size }) => size);
  public readonly appearance$ = this.select(({ appearance }) => appearance);
  public readonly disabled$ = this.select(({ disabled }) => disabled);

  constructor(elementRef: ElementRef<HTMLElement>) {
    super({
      isLoading: false,
      disabled: false,
      color: 'primary',
      appearance: elementRef.nativeElement.hasAttribute('mtg-outline-button')
        ? 'outline'
        : 'solid',
    });
  }

  public readonly setIsLoading = this.updater((state, isLoading: boolean) => ({
    ...state,
    isLoading,
  }));

  public readonly setColor = this.updater((state, color: Color) => ({
    ...state,
    color,
  }));

  public readonly setSize = this.updater((state, size: Size) => ({
    ...state,
    size,
  }));

  public readonly setAppearance = this.updater(
    (state, appearance: ButtonAppearance) => ({
      ...state,
      appearance,
    })
  );

  public readonly setDisabled = this.updater((state, disabled: boolean) => ({
    ...state,
    disabled,
  }));
}
