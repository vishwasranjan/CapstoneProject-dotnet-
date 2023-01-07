import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferToPayeeComponent } from './transfer-to-payee.component';

describe('TransferToPayeeComponent', () => {
  let component: TransferToPayeeComponent;
  let fixture: ComponentFixture<TransferToPayeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferToPayeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferToPayeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
