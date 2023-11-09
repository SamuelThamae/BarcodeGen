import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBarcodesComponent } from './all-barcodes.component';

describe('AllBarcodesComponent', () => {
  let component: AllBarcodesComponent;
  let fixture: ComponentFixture<AllBarcodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBarcodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBarcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
