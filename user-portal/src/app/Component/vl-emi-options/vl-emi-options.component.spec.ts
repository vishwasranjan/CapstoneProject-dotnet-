import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlEmiOptionsComponent } from './vl-emi-options.component';

describe('VlEmiOptionsComponent', () => {
  let component: VlEmiOptionsComponent;
  let fixture: ComponentFixture<VlEmiOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlEmiOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VlEmiOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
