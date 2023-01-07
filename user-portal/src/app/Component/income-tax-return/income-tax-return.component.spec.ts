import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeTaxReturnComponent } from './income-tax-return.component';

describe('IncomeTaxReturnComponent', () => {
  let component: IncomeTaxReturnComponent;
  let fixture: ComponentFixture<IncomeTaxReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeTaxReturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeTaxReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
