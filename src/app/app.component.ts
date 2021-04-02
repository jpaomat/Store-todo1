import { Component } from '@angular/core';
import PRODUCTS from 'src/app/config/dataTest/products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store-todo1';
  public categories;

  ngOnInit(): void {
    this.categories = Object.keys(PRODUCTS.products[0]);
  }
}
