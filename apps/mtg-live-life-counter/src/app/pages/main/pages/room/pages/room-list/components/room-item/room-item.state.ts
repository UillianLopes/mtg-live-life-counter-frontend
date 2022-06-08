import { Injectable } from '@angular/core';
import { RoomModel } from '@mtg-live-life-counter/core';
import { ComponentStore } from '@ngrx/component-store';

export interface RoomItemState {
  room?: RoomModel;
}

@Injectable()
export class RoomItemStore extends ComponentStore<RoomItemState> {
  public readonly room$ = this.select(({ room }) => room);

  constructor() {
    super({});
  }

  public readonly setRoom = this.updater((state, room: RoomModel) => ({
    ...state,
    room,
  }));
}
