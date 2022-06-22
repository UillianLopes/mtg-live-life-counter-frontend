import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MtgButtonModule,
  MtgContainerModule,
  MtgHeaderModule
} from '@mtg-live-life-counter/shared';
import { RoomListComponent } from './room-list.component';

import { RoomListRoutingModule } from './room-list.routing';
import { RoomItemComponent } from './components/room-item/room-item.component';
import { RoomStoreModule } from '@mtg-live-life-counter/stores/room';

@NgModule({
  declarations: [RoomListComponent, RoomItemComponent],
  imports: [
    CommonModule,
    RoomListRoutingModule,
    RoomStoreModule,
    MtgContainerModule,
    MtgButtonModule,
    MtgHeaderModule
  ],
})
export class RoomListModule {}
