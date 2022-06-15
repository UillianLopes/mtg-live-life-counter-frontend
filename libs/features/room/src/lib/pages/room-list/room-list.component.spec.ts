import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MtgContainerModule } from '@mtg-live-life-counter/shared';
import { RoomStoreModule } from '@mtg-live-life-counter/stores/room';
import { provideMockStore } from '@ngrx/store/testing';
import { StoreTestingModule } from '@mtg-live-life-counter/testing';
import { RoomListComponent } from './room-list.component';

describe('RoomListComponent', () => {
  let component: RoomListComponent;
  let fixture: ComponentFixture<RoomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomListComponent],
      imports: [
        CommonModule,
        RouterTestingModule,
        MtgContainerModule,
        RoomStoreModule,
        StoreTestingModule,
      ],
      providers: [provideMockStore({})],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
