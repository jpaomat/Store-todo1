import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductFormModalService } from 'src/app/core/services/productFormModal/product-form-modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() public categories : string[];

  constructor(
    public router: Router,
    private productFormService: ProductFormModalService
  ) { }

  ngOnInit(): void {
  }

  public redirectTo(path): void {
    this.router.navigate([path]);
  }

  public showForm(state) {
    console.log('¡clickkk', state)
    this.productFormService.showModal({
      activateModal: state,
      textsProductForm: 'data to show on product form layout',
      dataProductForm: 'data product form'
    });
  }
}
