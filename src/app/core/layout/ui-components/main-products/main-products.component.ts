import { Component, Input, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/core/services/requests/requests.service';

@Component({
  selector: 'app-main-products',
  templateUrl: './main-products.component.html',
  styleUrls: ['./main-products.component.scss']
})
export class MainProductsComponent implements OnInit {

  @Input() public category: string;
  @Input() public products;
  @Input() public showProducts: boolean;
  constructor(
    private requestsService: RequestsService
  ) { }

  ngOnInit(): void {
    let category = 
    console.log('DATA RECIBIDA EN MAIN', this.category, this.products);
    // this.category = localStorage.getItem("category") ? localStorage.getItem("category") : 'category';
    // this.requestsService.getData(this.requestsService.getCollection(this.category)).subscribe( data => {
    //   this.products =  data;
    // });
  }
}
