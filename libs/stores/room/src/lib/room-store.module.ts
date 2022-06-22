import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  roomStoreReducer,
  ROOM_STORE_FEATURE_KEY,
} from './+state/room-store.reducer';
import { RoomStoreEffects } from './+state/room-store.effects';
import { RoomStoreFacade } from './+state/room-store.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(ROOM_STORE_FEATURE_KEY, roomStoreReducer),
    EffectsModule.forFeature([RoomStoreEffects]),
  ],
  providers: [RoomStoreFacade],
})
export class RoomStoreModule {}
