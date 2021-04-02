import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexComponent } from './kardex.component';

describe('KardexComponent', () => {
  let component: KardexComponent;
  let fixture: ComponentFixture<KardexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KardexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.showButtonsTable(2, 'inventory');
    expect(component).toBeTruthy();
  });
});
