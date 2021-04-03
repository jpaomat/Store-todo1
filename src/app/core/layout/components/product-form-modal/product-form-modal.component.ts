import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductFormModalService } from 'src/app/core/services/productFormModal/product-form-modal.service';

import { AngularFireStorage } from '@angular/fire/storage';
import { RequestsService } from 'src/app/core/services/requests/requests.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './product-form-modal.component.html',
  styleUrls: ['./product-form-modal.component.scss']
})
export class ProductFormModalComponent implements OnInit {

  public showModal: boolean;
  public registerForm: FormGroup;
  private suscription: Subscription;
  private nameCollection: string = 'todo1';
  public categories: string[];
  public category: string;

  constructor(
    private productFormService: ProductFormModalService,
    private formBuilder: FormBuilder,
    private requestsService: RequestsService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeData();
    this.getData();
  }

  private initializeData(): void {
    this.suscription = this.productFormService.getModal().subscribe(response => {
      if (response) {
        this.showModal = (response.activateModal) ? true : false;
        /* istanbul ignore else*/
        if (this.showModal) {
          console.log('data recibida en modal', response);
          return;
        }
      }
    });
  }

  private initializeForm(): void {
    this.registerForm = this.formBuilder.group({
      nameProduct: ['', Validators.required],
      reference: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      discount: ['', Validators.required],
      image: [],
    });
  }

  private getData(): void {
    this.categories = JSON.parse(localStorage.getItem("categories"));
  }

  public captureImage(event): void {
    // this.registerForm.get('image').setValue(event.target.files[0]);
  }

  public onUpload(e): void {
    const id = Math.random().toString(36).substring(2); // generar id random para la imagen
    const file = e.target;
  }

  public onChange(e): void {
    this.category = e.target.value;
    console.log('category', this.category);
  }

  public validateForm() {
    return (this.registerForm.valid) ? false : true;
    // return (this.registerForm.valid && this.registerForm.get('image').value) ? false : true;
  }

  public onClose(state): void {
    this.productFormService.showModal({
      activateModal: state
    });
  }

  public onCall(): void {
    console.log('register form', this.registerForm);
    let valueForm = this.registerForm.value;
    const id = Math.random().toString(36).substring(2);
    this.requestsService.saveData(valueForm, id, this.requestsService.getCollection(this.category))
    this.onClose(false);

  }
}
