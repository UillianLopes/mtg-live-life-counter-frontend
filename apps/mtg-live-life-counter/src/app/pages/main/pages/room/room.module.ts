import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomComponent } from './room.component';
import { RoomRoutingModule } from './room.routing';

@NgModule({
  declarations: [RoomComponent],
  imports: [CommonModule, RoomRoutingModule],
})
export class RoomModule {}
