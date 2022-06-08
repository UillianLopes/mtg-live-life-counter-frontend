import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MtgContainerModule,
  MtgFormsModule,
} from '@mtg-live-life-counter/shared';
import { RoomCreateComponent } from './room-create.component';
import { RoomCreateRoutingModule } from './room-create.routing';

@NgModule({
  declarations: [RoomCreateComponent],
  imports: [
    CommonModule,
    RoomCreateRoutingModule,
    ReactiveFormsModule,
    MtgFormsModule,
    MtgContainerModule,
  ],
})
export class RoomCreateModule {}
