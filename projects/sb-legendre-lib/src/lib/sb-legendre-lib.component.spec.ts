import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbLegendreLibComponent } from './sb-legendre-lib.component';

describe('SbLegendreLibComponent', () => {
  let component: SbLegendreLibComponent;
  let fixture: ComponentFixture<SbLegendreLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbLegendreLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbLegendreLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
