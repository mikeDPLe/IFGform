import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfHolderComponent } from './pdf-holder.component';

describe('PdfHolderComponent', () => {
  let component: PdfHolderComponent;
  let fixture: ComponentFixture<PdfHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
