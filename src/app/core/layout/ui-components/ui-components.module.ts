import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainProductsComponent } from './main-products/main-products.component';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
  declarations: [CarouselComponent, MainProductsComponent],
  imports: [
    CommonModule,
    NgbModule,
    PipesModule
  ],
  exports: [
    CarouselComponent,
    MainProductsComponent
  ]
})
export class UiComponentsModule { }
