import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormModalComponent } from './product-form-modal/product-form-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductFormModalComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ProductFormModalComponent
  ]
})
export class ComponentsModule { }
