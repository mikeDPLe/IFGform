import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSigComponent } from './confirm-sig.component';

describe('ConfirmSigComponent', () => {
  let component: ConfirmSigComponent;
  let fixture: ComponentFixture<ConfirmSigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmSigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmSigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
