import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployesRoutingModule } from './employes-routing.module';
import { HomeComponent } from './home/home.component';
import { UiComponentsModule } from 'src/app/core/layout/ui-components/ui-components.module';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [HomeComponent, ProductsComponent],
  imports: [
    CommonModule,
    EmployesRoutingModule,
    UiComponentsModule,
    PipesModule
  ]
})
export class EmployesModule { }
