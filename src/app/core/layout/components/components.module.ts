import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import { ProductFormModalComponent } from './product-form-modal/product-form-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddProductModalComponent, ProductFormModalComponent],
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
