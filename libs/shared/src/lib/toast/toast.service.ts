import { Injectable, Injector, NgZone } from '@angular/core';
import { Color } from '../@types';
import { Overlay } from '@angular/cdk/overlay';
import { ToastComponent } from './toast.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { TOAST_CONFIG } from './toast.config';

@Injectable()
export class ToastService {
  constructor(
    private readonly _overlay: Overlay,
    private readonly _injector: Injector,
    private readonly _ngZone: NgZone
  ) {}

  public open(title: string, message: string, color: Color): void {
    this._ngZone.run(() => {
      const overlayRef = this._overlay.create({
        positionStrategy: this._overlay
          .position()
          .global()
          .right('16px')
          .bottom('16px'),
      });

      const componentPortal = new ComponentPortal(
        ToastComponent,
        null,
        Injector.create({
          parent: this._injector,
          providers: [
            {
              provide: TOAST_CONFIG,
              useValue: { title, message, color },
            },
          ],
        })
      );

      overlayRef.attach(componentPortal);

      setTimeout(() => overlayRef.detach(), 5000);
    });
  }
}
