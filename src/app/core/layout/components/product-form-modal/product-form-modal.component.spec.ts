import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { ProductFormModalService } from 'src/app/core/services/productFormModal/product-form-modal.service';
import { RequestsService } from 'src/app/core/services/requests/requests.service';
import { environment } from 'src/environments/environment';

import { ProductFormModalComponent } from './product-form-modal.component';

describe('ProductFormModalComponent', () => {
  let component: ProductFormModalComponent;
  let fixture: ComponentFixture<ProductFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFormModalComponent ],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
      providers: [
        ProductFormModalService,
        FormBuilder,
        RequestsService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data in ngOnint and activate the modal', async(() => {
    spyOn(TestBed.inject(ProductFormModalService), 'getModal').and.returnValue(of({
      activateModal: true,
      textsProductForm: 'data to show on product form layout',
      dataProductForm: 'data product form'
    }));
    component.ngOnInit();
    expect(component).toBeTruthy();
  }));

  it('should get the information image and save it', () => {
    let event = {
      target: {
        files: []
      }
    };
    component.captureImage(event);
    expect(component).toBeTruthy();
  });

  it('should validate if the form was completed correctly', () => {
    component.validateForm();
    expect(component).toBeTruthy();
  });

  it('should close the modal', () => {
    component.onClose(false);
    expect(component).toBeTruthy();
  });

  it('should send the data to the databse', () => {
    component.onCall();
    expect(component).toBeTruthy();
  });
});
