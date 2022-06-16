import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
} from '@angular/core';
import {
  FormControlDirective,
  FormControlName,
  FormControlStatus,
  NgControl,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[mtgInput]',
  host: {
    class: 'form-control',
  },
})
export class InputDirective implements OnInit, OnDestroy {
  private readonly _destroyed$ = new Subject<void>();

  constructor(
    @Optional() private readonly _formControlDirective: FormControlDirective,
    @Optional() private readonly _formControlName: FormControlName,
    @Optional() private readonly _ngControl: NgControl,
    private readonly _renderer2: Renderer2,
    private readonly _elementRef: ElementRef<HTMLElement>
  ) {}

  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  public ngOnInit(): void {
    if (this._formControlDirective)
      this._formControlDirective.control.statusChanges
        .pipe(takeUntil(this._destroyed$))
        .subscribe((status) => this._applyStatusClass(status));

    if (this._formControlName)
      this._formControlName.control.statusChanges
        .pipe(takeUntil(this._destroyed$))
        .subscribe((status) => this._applyStatusClass(status));

    if (this._ngControl && this._ngControl.control)
      this._ngControl.control.statusChanges
        .pipe(takeUntil(this._destroyed$))
        .subscribe((status) => this._applyStatusClass(status));
  }

  private _applyStatusClass(status: FormControlStatus): void {
    if (status === 'INVALID')
      this._renderer2.addClass(this._elementRef.nativeElement, 'is-invalid');
    else
      this._renderer2.removeClass(this._elementRef.nativeElement, 'is-invalid');
  }
}
