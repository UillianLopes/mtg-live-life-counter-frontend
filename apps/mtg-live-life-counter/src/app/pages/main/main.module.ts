import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { MtgContainerModule } from '@mtg-live-life-counter/shared';
import { MainRoutingModule } from './main.routing';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, MtgContainerModule],
})
export class MainModule {}
