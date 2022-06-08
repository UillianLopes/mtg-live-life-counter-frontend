import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RoomStoreState, ROOM_FEATURE_KEY } from './room.reducer';

const roomStateSelector = createFeatureSelector<RoomStoreState>(
  ROOM_FEATURE_KEY
);

export const isRoomsLoadingSelector = createSelector(
  roomStateSelector,
  ({ isRoomsLoading }) => isRoomsLoading
);

export const roomsSelector = createSelector(
  roomStateSelector,
  ({ rooms }) => rooms
);

export const errorSelector = createSelector(
  roomStateSelector,
  ({ error }) => error
);
