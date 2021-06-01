import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSignaturePadComponent } from './customer-signature-pad.component';

describe('CustomerSignaturePadComponent', () => {
  let component: CustomerSignaturePadComponent;
  let fixture: ComponentFixture<CustomerSignaturePadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSignaturePadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSignaturePadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
