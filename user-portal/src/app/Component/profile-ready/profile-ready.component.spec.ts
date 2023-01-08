import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReadyComponent } from './profile-ready.component';

describe('ProfileReadyComponent', () => {
  let component: ProfileReadyComponent;
  let fixture: ComponentFixture<ProfileReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileReadyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
