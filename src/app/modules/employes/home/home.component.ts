import { Component, OnInit } from '@angular/core';
import HOME from 'src/app/config/dataTest/home.json';
import { DataManagementService } from 'src/app/core/services/dataManagement/data-management.service';
import PRODUCTS from 'src/app/config/dataTest/products.json';
import { RequestsService } from 'src/app/core/services/requests/requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title: string = HOME.home[0].title[0].text;
  public categories$;
  public ofertas;
  public dataView = {
    products: {
      glasses: '',
      toys: '',
      books: '',
      comics: '',
      accesories: '',
      tshirts: ''
    }
  }
  public discountCategories;

  constructor(
    private dataManagementService: DataManagementService,
    private requestsService: RequestsService
  ) { }

  ngOnInit(): void {
    console.log('this.dataView.products', PRODUCTS.products[0]);
    this.discountCategories = this.dataManagementService.getProductsWithOffer(PRODUCTS.discountCategories[0]);
    this.ofertas = this.dataManagementService.getProductsWithOffer(PRODUCTS.products[0]);

  }
}
