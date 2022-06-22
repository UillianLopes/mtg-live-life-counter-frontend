import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MtgFormsModule } from '@mtg-live-life-counter/shared';

import { SignInFeatureComponent } from './sign-in-feature.component';

describe('SignInComponent', () => {
  let component: SignInFeatureComponent;
  let fixture: ComponentFixture<SignInFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInFeatureComponent],
      imports: [MtgFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SignInFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
