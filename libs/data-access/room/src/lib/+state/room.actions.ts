import { RoomModel } from '@mtg-live-life-counter/core';
import { createAction, props, union } from '@ngrx/store';

export enum RoomActions {
  LOAD_ROOMS = '[Room] Load Rooms',
  LOAD_ROOMS_SUCCESS = '[Room] Load Rooms Success',
  LOAD_ROOMS_FAILURE = '[Room] Load Rooms Failure',

  RESET_STATE = '[Room] Reset State',
}

export const loadRooms = createAction(RoomActions.LOAD_ROOMS);

export const loadRoomsSuccess = createAction(
  RoomActions.LOAD_ROOMS_SUCCESS,
  props<{ rooms: RoomModel[] }>()
);

export const loadRoomsFailure = createAction(
  RoomActions.LOAD_ROOMS_FAILURE,
  props<{ error: unknown }>()
);

export const resetState = createAction(RoomActions.RESET_STATE);

const _roomActionsUnion = union({
  loadRooms,
  loadRoomsFailure,
  loadRoomsSuccess,

  resetState,
});

export type RoomActionsUnion = typeof _roomActionsUnion;
