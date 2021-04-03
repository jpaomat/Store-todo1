import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

import { MainProductsComponent } from './main-products.component';

describe('MainProductsComponent', () => {
  let component: MainProductsComponent;
  let fixture: ComponentFixture<MainProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProductsComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
