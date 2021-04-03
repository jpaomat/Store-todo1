import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { KardexComponent } from './kardex/kardex.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from 'src/app/core/pipes/pipes.module';


@NgModule({
  declarations: [KardexComponent, AddProductsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    PipesModule
  ]
})
export class AdminModule { }
