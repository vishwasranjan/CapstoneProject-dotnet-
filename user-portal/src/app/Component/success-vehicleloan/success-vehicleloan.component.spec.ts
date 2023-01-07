import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessVehicleloanComponent } from './success-vehicleloan.component';

describe('SuccessVehicleloanComponent', () => {
  let component: SuccessVehicleloanComponent;
  let fixture: ComponentFixture<SuccessVehicleloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessVehicleloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessVehicleloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
