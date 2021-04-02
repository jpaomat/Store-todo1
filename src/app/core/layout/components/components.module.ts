import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import { ProductFormModalComponent } from './product-form-modal/product-form-modal.component';



@NgModule({
  declarations: [AddProductModalComponent, ProductFormModalComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
