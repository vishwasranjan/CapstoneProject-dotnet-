import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingPayeesComponent } from './existing-payees.component';

describe('ExistingPayeesComponent', () => {
  let component: ExistingPayeesComponent;
  let fixture: ComponentFixture<ExistingPayeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingPayeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingPayeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
