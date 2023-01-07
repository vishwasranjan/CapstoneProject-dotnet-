import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessHomeloanComponent } from './success-homeloan.component';

describe('SuccessHomeloanComponent', () => {
  let component: SuccessHomeloanComponent;
  let fixture: ComponentFixture<SuccessHomeloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessHomeloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessHomeloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
