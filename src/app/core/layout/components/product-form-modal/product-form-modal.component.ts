import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductFormModalService } from 'src/app/core/services/productFormModal/product-form-modal.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './product-form-modal.component.html',
  styleUrls: ['./product-form-modal.component.scss']
})
export class ProductFormModalComponent implements OnInit {

  public showModal: boolean;
  public registerForm: FormGroup;
  private suscription: Subscription;

  constructor(
    private productFormService: ProductFormModalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeData();
  }

  private initializeData(): void {
    this.suscription = this.productFormService.getModal().subscribe(response => {
      if (response) {
        this.showModal = (response.activateModal) ? true : false;
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

  public captureImage(event): void {
    this.registerForm.get('image').setValue(event.target.files[0]);
  }

  public validateForm(){
    return (this.registerForm.valid && this.registerForm.get('image').value) ? false : true;
  }

  public onClose(state): void {
    this.productFormService.showModal({
      activateModal: state
    });
  }

  public onCall(): void {
    console.log('register form', this.registerForm);
  }
}
