import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { MainFeatureComponent } from './main-feature.component';

describe('MainFeatureComponent', () => {
  let component: MainFeatureComponent;
  let fixture: ComponentFixture<MainFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainFeatureComponent],
      imports: [CommonModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MainFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
