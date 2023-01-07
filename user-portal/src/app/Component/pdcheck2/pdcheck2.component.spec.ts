import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pdcheck2Component } from './pdcheck2.component';

describe('Pdcheck2Component', () => {
  let component: Pdcheck2Component;
  let fixture: ComponentFixture<Pdcheck2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pdcheck2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pdcheck2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
