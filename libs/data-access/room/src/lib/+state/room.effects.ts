import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { RoomActionsUnion } from './room.actions';
import { RoomFacade } from './room.facade';


@Injectable()
export class RoomEffects {
  constructor(
    private readonly _facade: RoomFacade,
    private readonly _actions: Actions<RoomActionsUnion>
  ) {}
}
