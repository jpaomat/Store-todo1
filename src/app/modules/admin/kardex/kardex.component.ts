import { Component, OnInit } from '@angular/core';

import KARDEX from 'src/app/config/dataTest/kardex.json';
import { DataManagementService } from 'src/app/core/services/dataManagement/data-management.service';
import { ProductFormModalService } from 'src/app/core/services/productFormModal/product-form-modal.service';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {

  public productsInventory;
  public optionSelected: string;
  public titleTable: string;
  public arrayClassButtons: string[] = [];
  public dataView = {
    parametricTexts: {
      header: [],
      table: []
    }
  }
  public fieldsTable;

  constructor(
    private dataManagementService: DataManagementService,
    private productFormService: ProductFormModalService
  ) { }

  ngOnInit(): void {
    this.dataManagementService.organizeDataView('texts', KARDEX.kardex, this.dataView.parametricTexts);
    this.titleTable = this.dataView.parametricTexts.header[0].title[0].T001
    this.optionSelected = this.dataView.parametricTexts.header[2].buttons[0].option;
    this.arrayClassButtons[0] = 'd-none';
    this.validateOptionSelected(0);
    console.log('this.dataView', this.dataView);
  }

  public validateStock(stock): string {
    return (stock < 1) ? 'withoutStock' : '';
  }

  public validateOptionSelected(index): void {
    let fields = this.dataView.parametricTexts.table[0].nameColumns[0];
    this.productsInventory = KARDEX.products[index][this.optionSelected];
    this.fieldsTable = fields[this.optionSelected];
  }

  public showButtonsTable(index, optionSelected) {
    this.arrayClassButtons.forEach((c, i) => {
      c = '';
      this.arrayClassButtons[i] = c;
    });
    this.arrayClassButtons[index] = 'd-none';
    this.titleTable = this.dataView.parametricTexts.header[0].title[index].T001;
    this.optionSelected = optionSelected;
    this.validateOptionSelected(index);
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
