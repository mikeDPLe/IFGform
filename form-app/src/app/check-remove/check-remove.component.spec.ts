import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRemoveComponent } from './check-remove.component';

describe('CheckRemoveComponent', () => {
  let component: CheckRemoveComponent;
  let fixture: ComponentFixture<CheckRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
