import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RoomStoreState } from './room.reducer';
import * as RoomSelectors from './room.selectors';
import * as RoomActions from './room.actions';

@Injectable()
export class RoomFacade {
  public readonly isRoomsLoading$ = this._store.select(
    RoomSelectors.isRoomsLoadingSelector
  );
  public readonly rooms$ = this._store.select(RoomSelectors.roomsSelector);
  public readonly error$ = this._store.select(RoomSelectors.errorSelector);

  constructor(private readonly _store: Store<RoomStoreState>) {}

  public loadRooms(): void {
    this._store.dispatch(RoomActions.loadRooms());
  }

  public resetState(): void {
    this._store.dispatch(RoomActions.resetState());
  }
}
