import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RoomStoreState, ROOM_STORE_FEATURE_KEY } from './room-store.reducer';

const roomStoreStateSelector = createFeatureSelector<RoomStoreState>(
  ROOM_STORE_FEATURE_KEY
);

export const isRoomsLoadingSelector = createSelector(
  roomStoreStateSelector,
  ({ isRoomsLoading }) => isRoomsLoading
);

export const roomsSelector = createSelector(
  roomStoreStateSelector,
  ({ rooms }) => rooms
);

export const errorSelector = createSelector(
  roomStoreStateSelector,
  ({ error }) => error
);
