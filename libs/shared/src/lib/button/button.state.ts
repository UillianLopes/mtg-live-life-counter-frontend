import { ElementRef, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Color } from '../@types';
import { Size } from '../@types/size.type';
import { ButtonAppearance } from './button-appearance.type';

export interface ButtonState {
  isLoading: boolean;
  color: Color;
  appearance: ButtonAppearance;
  size?: Size;
}

function obtainButtonClass(
  color: Color,
  appearance: ButtonAppearance,
  size?: Size
): string[] {
  const selector = appearance == 'outline' ? `btn-outline` : `btn`;
  const colors = [`btn`, `mtg-button`, `${selector}-${color}`];

  if (size) colors.push(`btn-${size}`);

  return colors;
}

@Injectable()
export class ButtonStore extends ComponentStore<ButtonState> {
  public readonly isLoading$ = this.select(({ isLoading }) => isLoading);
  public readonly color$ = this.select(({ color }) => color);
  public readonly size$ = this.select(({ size }) => size);
  public readonly appearance$ = this.select(({ appearance }) => appearance);
  public readonly class$ = this.select(
    this.color$,
    this.appearance$,
    this.size$,
    obtainButtonClass
  );

  constructor(elementRef: ElementRef<HTMLElement>) {
    super({
      isLoading: false,
      color: 'primary',
      appearance:
        elementRef.nativeElement.tagName === 'MTG-OUTLINE-BUTTON'
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
}
