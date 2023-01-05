import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineAssistComponent } from './online-assist.component';

describe('OnlineAssistComponent', () => {
  let component: OnlineAssistComponent;
  let fixture: ComponentFixture<OnlineAssistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineAssistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
