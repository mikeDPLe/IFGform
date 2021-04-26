import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimFailEmployee1Component } from './dim-fail-employee1.component';

describe('DimFailEmployee1Component', () => {
  let component: DimFailEmployee1Component;
  let fixture: ComponentFixture<DimFailEmployee1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimFailEmployee1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DimFailEmployee1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
