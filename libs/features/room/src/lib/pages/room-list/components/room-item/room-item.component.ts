import { Component, Input, OnInit } from '@angular/core';
import { RoomModel } from '@mtg-live-life-counter/core';
import { RoomItemStore } from './room-item.state';

@Component({
  selector: 'mtg-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss'],
  providers: [RoomItemStore],
})
export class RoomItemComponent {
  @Input()
  set room(room: RoomModel) {
    this._store.setRoom(room);
  }

  public readonly room$ = this._store.room$;

  constructor(private readonly _store: RoomItemStore) {}
}
