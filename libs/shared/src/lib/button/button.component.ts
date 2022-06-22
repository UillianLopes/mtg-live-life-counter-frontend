import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { combineLatest, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { Color } from '../@types';
import { Size } from '../@types/size.type';
import { ButtonAppearance } from './button-appearance.type';
import { ButtonStore } from './button.state';

const COLOR_AND_APPEARANCE_COMBINATIONS = new Map<
  string,
  Map<string, string[]>
>([
  [
    'solid',
    new Map<string, string[]>([
      ['primary', ['btn-primary']],
      ['secondary', ['btn-secondary']],
      ['success', ['btn-success']],
      ['danger', ['btn-danger']],
      ['warning', ['btn-warning']],
      ['info', ['btn-info']],
      ['light', ['btn-light']],
      ['dark', ['btn-dark']],
    ]),
  ],
  [
    'outline',
    new Map<string, string[]>([
      ['primary', ['btn-outline-primary']],
      ['secondary', ['btn-outline-secondary']],
      ['success', ['btn-outline-success']],
      ['danger', ['btn-outline-danger']],
      ['warning', ['btn-outline-warning']],
      ['info', ['btn-outline-info']],
      ['light', ['btn-outline-light']],
    ]),
  ],
]);

const SIZES = new Map<Size, string>([
  ['sm', 'btn-sm'],
  ['lg', 'btn-lg'],
]);

@Component({
  selector: 'button[mtg-button],button[mtg-outline-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers: [ButtonStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'btn mtg-button',
  },
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit, OnDestroy {
  private readonly _destroyed$ = new Subject<void>();
  @Input()
  set appearance(appearance: ButtonAppearance) {
    this._store.setAppearance(appearance);
  }

  @Input()
  set size(size: Size) {
    this._store.setSize(size);
  }

  @Input()
  set color(color: Color) {
    this._store.setColor(color);
  }

  @Input()
  set isLoading(isLoading: boolean) {
    this._store.setIsLoading(isLoading);
  }

  @Input()
  set disabled(disabled: boolean) {
    this._store.setDisabled(disabled);
  }

  public readonly isLoading$ = this._store.isLoading$;

  constructor(
    private readonly _store: ButtonStore,
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _renderer2: Renderer2
  ) {}

  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  public ngOnInit(): void {
    combineLatest([this._store.color$, this._store.appearance$])
      .pipe(takeUntil(this._destroyed$), distinctUntilChanged())
      .subscribe(([color, appearance]) =>
        this._applyColorAndAppearance(color, appearance)
      );

    this._store.size$
      .pipe(takeUntil(this._destroyed$), distinctUntilChanged())
      .subscribe((size) => this._applySize(size));

    this._store.disabled$
      .pipe(takeUntil(this._destroyed$), distinctUntilChanged())
      .subscribe((disabled) => this._applyDisabled(disabled));

    this._store.isLoading$
      .pipe(takeUntil(this._destroyed$), distinctUntilChanged())
      .subscribe((isLoading) => this._applyIsLoading(isLoading));
  }

  private _applyDefaultColorAndAppearance(): void {
    if (this._containsClass('btn-primary')) return;

    this._addClass('btn-primary');
  }

  private _applyColorAndAppearance(
    color: Color,
    appearance: ButtonAppearance
  ): void {
    const appearaceColors = COLOR_AND_APPEARANCE_COMBINATIONS.get(appearance);

    if (!appearaceColors) {
      this._applyDefaultColorAndAppearance();
      return;
    }

    const classTokens = appearaceColors.get(color);

    if (!classTokens) {
      this._applyDefaultColorAndAppearance();
      return;
    }

    const classes = new Set(classTokens);

    this._clearColorAndAppearanceFromElementClassList();

    for (const classToken of classes) {
      this._addClass(classToken);
    }
  }

  private _clearColorAndAppearanceFromElementClassList(): void {
    for (const [, colors] of COLOR_AND_APPEARANCE_COMBINATIONS) {
      for (const [, classTokens] of colors) {
        for (const classToken of classTokens) {
          if (!this._containsClass(classToken)) continue;

          this._removeClass(classToken);
        }
      }
    }
  }

  private _applySize(size?: Size): void {
    if (!size) return;

    this._clearSizeFromElementClassList();

    const classToken = SIZES.get(size);

    if (!classToken) return;

    this._addClass(classToken);
  }

  private _clearSizeFromElementClassList(): void {
    for (const [, classToken] of SIZES) {
      if (this._containsClass(classToken)) this._removeClass(classToken);
    }
  }

  private _applyDisabled(disabled: boolean): void {
    if (disabled) this._addClass('disabled');
    else if (this._containsClass('disabled')) this._removeClass('disabled');
  }

  private _applyIsLoading(isLoading: boolean): void {
    if (isLoading) this._addClass('mtg-button--loading');
    else if (this._containsClass('mtg-button--loading'))
      this._removeClass('mtg-button--loading');
  }

  private _containsClass(className: string): boolean {
    return this._elementRef.nativeElement.classList.contains(className);
  }

  private _addClass(className: string): void {
    this._renderer2.addClass(this._elementRef.nativeElement, className);
  }

  private _removeClass(className: string): void {
    this._renderer2.removeClass(this._elementRef.nativeElement, className);
  }
}
