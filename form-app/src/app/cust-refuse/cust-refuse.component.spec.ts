import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustRefuseComponent } from './cust-refuse.component';

describe('CustRefuseComponent', () => {
  let component: CustRefuseComponent;
  let fixture: ComponentFixture<CustRefuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustRefuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
