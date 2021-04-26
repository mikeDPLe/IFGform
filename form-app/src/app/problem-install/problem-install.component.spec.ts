import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemInstallComponent } from './problem-install.component';

describe('ProblemInstallComponent', () => {
  let component: ProblemInstallComponent;
  let fixture: ComponentFixture<ProblemInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemInstallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
