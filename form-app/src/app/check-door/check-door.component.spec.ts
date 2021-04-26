import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDoorComponent } from './check-door.component';

describe('CheckDoorComponent', () => {
  let component: CheckDoorComponent;
  let fixture: ComponentFixture<CheckDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckDoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
