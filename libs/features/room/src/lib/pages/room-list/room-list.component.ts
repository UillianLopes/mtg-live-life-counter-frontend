import { Component, OnInit } from '@angular/core';
import { ToastService } from '@mtg-live-life-counter/shared';

import { RoomStoreFacade } from '@mtg-live-life-counter/stores/room';

@Component({
  selector: 'mtg-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
  public readonly rooms$ = this._facade.rooms$;
  public readonly isRoomsLoading$ = this._facade.isRoomsLoading$;

  constructor(
    private readonly _facade: RoomStoreFacade,
    private readonly _toastService: ToastService
  ) {}

  open() {
    this._toastService.open('TESTE ', 'This is a toast test', 'primary');
  }

  public ngOnInit(): void {
    this._facade.loadRooms();
  }
}
