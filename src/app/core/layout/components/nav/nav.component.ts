import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductFormModalService } from 'src/app/core/services/productFormModal/product-form-modal.service';
import { RequestsService } from 'src/app/core/services/requests/requests.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public category: string;
  public products;
  public categories$;
  public categoriesArray: string[];
  public showProducts: boolean;

  constructor(
    public router: Router,
    private productFormService: ProductFormModalService,
    private requestsService: RequestsService
  ) { }

  ngOnInit(): void {
    this.categories$ = this.requestsService.getData(this.requestsService.getCollection('categoriasProductos'));
    // this.requestsService.getData(this.requestsService.getCollection('categoriasProductos')).subscribe( data => {
    //   this.categories$ = data;
    //   console.log('this.categories$', this.categories$)
    // });
  }

  public getData(data) {
    let keys = Object.keys(data);
    let newArray = []
    keys.forEach((element, i) => {
      newArray[i] = data[element];
    });
    // this.categoriesArray = newArray;
    localStorage.setItem("categories", JSON.stringify(newArray));
    return newArray;
  }

  public redirectTo(path): void {
    this.router.navigate([path]);
  }

  public onClick(category): void {
    // this.showProducts = (category === 'false') ? false : true;
    this.showProducts = true;
    localStorage.setItem("category", category);
    this.category = category;
    this.requestsService.getData(this.requestsService.getCollection(category)).subscribe(data => {
      if (data) {
        this.products = data;
        this.redirectTo('products');
      }
    });
  }

  public hideProducts():void{
    this.showProducts = false;
  }

  public showForm(state) {
    this.productFormService.showModal({
      activateModal: state,
      // textsProductForm: 'data to show on product form layout',
      // dataProductForm: 'data product form'
    });
  }
}
