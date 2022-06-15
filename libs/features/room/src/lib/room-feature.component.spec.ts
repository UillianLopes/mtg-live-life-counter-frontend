import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RoomFeatureComponent } from './room-feature.component';

describe('RoomFeatureComponent', () => {
  let component: RoomFeatureComponent;
  let fixture: ComponentFixture<RoomFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomFeatureComponent],
      imports: [CommonModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
