import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFeatureComponent } from './sign-up-feature.component';

describe('SignUpComponent', () => {
  let component: SignUpFeatureComponent;
  let fixture: ComponentFixture<SignUpFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
