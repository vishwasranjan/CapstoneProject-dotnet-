import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proceed1Component } from './proceed1.component';

describe('Proceed1Component', () => {
  let component: Proceed1Component;
  let fixture: ComponentFixture<Proceed1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proceed1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proceed1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
