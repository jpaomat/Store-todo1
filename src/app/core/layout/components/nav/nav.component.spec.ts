import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductFormModalService } from 'src/app/core/services/productFormModal/product-form-modal.service';
import { RequestsService } from 'src/app/core/services/requests/requests.service';
import { environment } from 'src/environments/environment';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComponent ],
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
});
