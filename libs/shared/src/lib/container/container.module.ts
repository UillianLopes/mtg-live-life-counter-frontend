import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { MtgLoadingModule } from '../loading';

@NgModule({
  declarations: [ContainerComponent],
  imports: [CommonModule, MtgLoadingModule],
  exports: [ContainerComponent],
})
export class MtgContainerModule {}
