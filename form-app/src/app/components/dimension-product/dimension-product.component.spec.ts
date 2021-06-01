import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionProductComponent } from './dimension-product.component';

describe('DimensionProductComponent', () => {
  let component: DimensionProductComponent;
  let fixture: ComponentFixture<DimensionProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimensionProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
