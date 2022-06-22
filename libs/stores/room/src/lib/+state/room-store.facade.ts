import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RoomStoreState } from './room-store.reducer';
import * as RoomSelectors from './room-store.selectors';
import * as RoomActions from './room-store.actions';

@Injectable()
export class RoomStoreFacade {
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
