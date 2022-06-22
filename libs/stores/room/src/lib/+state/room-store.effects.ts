import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { RoomStoreActionsUnion } from './room-store.actions';
import { RoomStoreFacade } from './room-store.facade';


@Injectable()
export class RoomStoreEffects {
  constructor(
    private readonly _facade: RoomStoreFacade,
    private readonly _actions: Actions<RoomStoreActionsUnion>
  ) {}
}
