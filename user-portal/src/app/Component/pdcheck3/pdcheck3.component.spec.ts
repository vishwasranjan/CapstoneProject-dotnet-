import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pdcheck3Component } from './pdcheck3.component';

describe('Pdcheck3Component', () => {
  let component: Pdcheck3Component;
  let fixture: ComponentFixture<Pdcheck3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pdcheck3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pdcheck3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
