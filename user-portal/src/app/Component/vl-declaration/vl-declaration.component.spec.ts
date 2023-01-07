import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlDeclarationComponent } from './vl-declaration.component';

describe('VlDeclarationComponent', () => {
  let component: VlDeclarationComponent;
  let fixture: ComponentFixture<VlDeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlDeclarationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VlDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
