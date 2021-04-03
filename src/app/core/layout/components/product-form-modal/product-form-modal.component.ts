import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductFormModalService } from 'src/app/core/services/productFormModal/product-form-modal.service';

import { RequestsService } from 'src/app/core/services/requests/requests.service';
import { Router } from '@angular/router';
import FORM from 'src/app/config/dataTest/form.json';
import { DataManagementService } from 'src/app/core/services/dataManagement/data-management.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './product-form-modal.component.html',
  styleUrls: ['./product-form-modal.component.scss']
})
export class ProductFormModalComponent implements OnInit {

  public showModal: boolean;
  public activateInput: boolean;
  public registerForm: FormGroup;
  public categories: string[];
  public category: string;
  public title: string;
  public header: string;
  public dataView = {
    parametricTexts: {
      title: [],
      header: [],
      placeholders: [],
      buttons: []
    }
  }

  constructor(
    private productFormService: ProductFormModalService,
    private formBuilder: FormBuilder,
    private requestsService: RequestsService,
    public router: Router,
    private dataManagementService: DataManagementService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeData();
    this.getData();
  }

  private initializeData(): void {
    this.dataManagementService.organizeDataView('texts', FORM.form, this.dataView.parametricTexts);
    this.productFormService.getModal().subscribe(response => {
      if (response) {
        this.showModal = (response.activateModal) ? true : false;
        this.activateInput = (response.activateInput) ? true : false;
        this.getTexts();
        /* istanbul ignore else*/
        if (this.showModal) {
          console.log('data recibida en modal', response, this.activateInput);
          return;
        }
      }
    });
    console.log('textos parámetricos form', this.dataView);
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

  public getTexts(): void {
    let index = (this.activateInput) ? 1 : 0;
      this.title = this.dataView.parametricTexts.title[index].text;
      this.header = this.dataView.parametricTexts.header[index].text;
  }

  public onClick(state): void {
    this.activateInput = (state == 'new') ? false: true;
    this.getTexts();
  }

  public validateForm() {
    return (this.registerForm.valid) ? false : true;
    // return (this.registerForm.valid && this.registerForm.get('image').value) ? false : true;
  }

  public onClose(state): void {
    this.productFormService.showModal({
      activateModal: state,
      activateInput: false
    });
    this.initializeForm();
  }

  public onCall(): void {
    console.log('register form', this.registerForm);
    let valueForm = this.registerForm.value;
    const id = Math.random().toString(36).substring(2);
    this.requestsService.saveData(valueForm, id, this.requestsService.getCollection(this.category));
    this.initializeForm();
    this.onClose(false);
    this.router.navigate(['/']);
  }
}
