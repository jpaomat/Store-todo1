import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/core/services/requests/requests.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public category: string;
  public products;
  constructor(
    private requestsService: RequestsService
  ) { }

  ngOnInit(): void {
    this.category = localStorage.getItem("category");
    this.requestsService.getData(this.requestsService.getCollection(this.category)).subscribe( data => {
      this.products =  data;
    });
  }

}
