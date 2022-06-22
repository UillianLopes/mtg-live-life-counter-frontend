import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MtgButtonModule,
  MtgContainerModule,
  MtgFormsModule,
} from '@mtg-live-life-counter/shared';

import { SignUpFeatureComponent } from './sign-up-feature.component';

describe('SignUpComponent', () => {
  let component: SignUpFeatureComponent;
  let fixture: ComponentFixture<SignUpFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpFeatureComponent],
      imports: [
        CommonModule,
        MtgFormsModule,
        MtgContainerModule,
        MtgButtonModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
