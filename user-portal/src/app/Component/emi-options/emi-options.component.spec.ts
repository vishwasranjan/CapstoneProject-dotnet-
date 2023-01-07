import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiOptionsComponent } from './emi-options.component';

describe('EmiOptionsComponent', () => {
  let component: EmiOptionsComponent;
  let fixture: ComponentFixture<EmiOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmiOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
