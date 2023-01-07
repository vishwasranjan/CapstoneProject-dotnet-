import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pdcheck1Component } from './pdcheck1.component';

describe('Pdcheck1Component', () => {
  let component: Pdcheck1Component;
  let fixture: ComponentFixture<Pdcheck1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pdcheck1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pdcheck1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
