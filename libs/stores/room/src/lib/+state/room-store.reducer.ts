import { RoomModel } from '@mtg-live-life-counter/core';
import { Action, createReducer, on } from '@ngrx/store';

import {
  loadRooms,
  loadRoomsFailure,
  loadRoomsSuccess,
  resetState,
} from './room-store.actions';

export const ROOM_STORE_FEATURE_KEY = 'roomStore';

export interface RoomStoreState {
  isRoomsLoading?: boolean;
  rooms: RoomModel[];

  error?: unknown;
}

const initialState: RoomStoreState = {
  rooms: [],
};

const _roomStoreReducer = createReducer(
  initialState,

  on(loadRooms, (state) => ({ ...state, error: undefined })),
  on(loadRoomsSuccess, (state, { rooms }) => ({
    ...state,
    rooms,
    isRoomsLoading: false,
  })),
  on(loadRoomsFailure, (state, { error }) => ({
    ...state,
    error,
    isRoomsLoading: false,
  })),

  on(resetState, () => ({ ...initialState }))
);

export function roomStoreReducer(
  state: RoomStoreState | undefined,
  action: Action
): RoomStoreState {
  return _roomStoreReducer(state, action);
}
