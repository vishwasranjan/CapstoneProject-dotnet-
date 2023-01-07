import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlApplynowComponent } from './vl-applynow.component';

describe('VlApplynowComponent', () => {
  let component: VlApplynowComponent;
  let fixture: ComponentFixture<VlApplynowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlApplynowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VlApplynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
