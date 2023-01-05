import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HlApplynowComponent } from './hl-applynow.component';

describe('HlApplynowComponent', () => {
  let component: HlApplynowComponent;
  let fixture: ComponentFixture<HlApplynowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HlApplynowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HlApplynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
