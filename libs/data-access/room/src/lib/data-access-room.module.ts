import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  roomStoreReducer,
  ROOM_FEATURE_KEY,
} from './+state/room.reducer';
import { RoomEffects } from './+state/room.effects';
import { RoomFacade } from './+state/room.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(ROOM_FEATURE_KEY, roomStoreReducer),
    EffectsModule.forFeature([RoomEffects]),
  ],
  providers: [RoomFacade],
})
export class DataAccessRoomModule {}
