import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, OverlayModule, PortalModule],
  exports: [ToastComponent],
})
export class ToastModule {
  static forRoot(): ModuleWithProviders<ToastModule> {
    return {
      ngModule: ToastModule,
      providers: [ToastService],
    };
  }
}
