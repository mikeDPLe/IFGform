import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInitialComponent } from './check-initial.component';

describe('CheckInitialComponent', () => {
  let component: CheckInitialComponent;
  let fixture: ComponentFixture<CheckInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckInitialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
