import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has solid appearance', () => {
    component.appearance = 'solid';
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('btn-primary')).toBe(true);
  });

  it('should has solid appearance', () => {
    component.appearance = 'outline';
    fixture.detectChanges();

    expect(
      fixture.nativeElement.classList.contains('btn-outline-primary')
    ).toBe(true);
  });

  it('should be normal', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.classList.contains('btn-lg')).toBe(false);
    expect(fixture.nativeElement.classList.contains('btn-sm')).toBe(false);
  });

  it('should be large', () => {
    component.size = 'lg';
    fixture.detectChanges();

    expect(fixture.nativeElement.classList.contains('btn-lg')).toBe(true);
  });

  it('should be small', () => {
    component.size = 'sm';
    fixture.detectChanges();

    expect(fixture.nativeElement.classList.contains('btn-sm')).toBe(true);
  });

  it('should be disabled', () => {
    component.disabled = true;
    fixture.detectChanges();

    expect(fixture.nativeElement.classList.contains('disabled')).toBe(true);
  });

  it('should be enabled', () => {
    component.disabled = false;
    fixture.detectChanges();

    expect(fixture.nativeElement.classList.contains('disabled')).toBe(false);
  });

  it('should be loading', () => {
    component.isLoading = true;
    fixture.detectChanges();

    expect(
      fixture.nativeElement.classList.contains('mtg-button--loading')
    ).toBe(true);
  });

  it('should be not loading', () => {
    component.isLoading = false;
    fixture.detectChanges();

    expect(
      fixture.nativeElement.classList.contains('mtg-button--loading')
    ).toBe(false);
  });

  it('should be able to change loading', () => {
    component.isLoading = true;
    fixture.detectChanges();
    expect(
      fixture.nativeElement.classList.contains('mtg-button--loading')
    ).toBe(true);

    component.isLoading = false;
    fixture.detectChanges();
    expect(
      fixture.nativeElement.classList.contains('mtg-button--loading')
    ).toBe(false);
  });
});
