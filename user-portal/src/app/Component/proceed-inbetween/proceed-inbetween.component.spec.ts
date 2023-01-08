import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedInbetweenComponent } from './proceed-inbetween.component';

describe('ProceedInbetweenComponent', () => {
  let component: ProceedInbetweenComponent;
  let fixture: ComponentFixture<ProceedInbetweenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceedInbetweenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceedInbetweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
