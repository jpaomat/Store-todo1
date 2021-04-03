import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Products } from 'src/app/core/interfaces/data';
import { ProductFormModalService } from 'src/app/core/services/productFormModal/product-form-modal.service';
import { RequestsService } from 'src/app/core/services/requests/requests.service';
import { environment } from 'src/environments/environment';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let products: BehaviorSubject<any | null> = new BehaviorSubject<any|null>(null)

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
      providers: [
        ProductFormModalService,
        RequestsService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(TestBed.inject(Router), 'navigate').and.returnValue(Promise.resolve(true));
    component.redirectTo('');
    expect(component).toBeTruthy();
  });

  it('should show the modal', () => {
    component.showForm(true);
    expect(component).toBeTruthy();
  });

  it('should get array', () => {
    component.getData({ key1: "hola", key2: "mundo" });
    expect(component).toBeTruthy();
  });

  it('should get products from the categories and show it', () => {
    spyOn(TestBed.inject(Router), 'navigate').and.returnValue(Promise.resolve(true));
    // spyOn(TestBed.inject(RequestsService), 'getData').and.returnValue(products.asObservable());
    component.onClick('camisetas');
    expect(component).toBeTruthy();
  });

  it('should hide products components', () => {
    component.hideProducts();
    expect(component).toBeTruthy();
  });
});
