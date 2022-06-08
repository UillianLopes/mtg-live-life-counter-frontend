import { Component, OnInit } from '@angular/core';

import { RoomFacade } from '@mtg-live-life-counter/data-access/room';

@Component({
  selector: 'mtg-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
  public readonly rooms$ = this._facade.rooms$;
  public readonly isRoomsLoading$ = this._facade.isRoomsLoading$;

  constructor(private readonly _facade: RoomFacade) {}

  public ngOnInit(): void {
    this._facade.loadRooms();
  }
}
