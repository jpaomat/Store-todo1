import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { KardexComponent } from './kardex/kardex.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [KardexComponent, AddProductsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule,
    // AngularFireStorageModule
  ],
  providers: [
    {
      provide: BUCKET, useValue: 'gs://store-todo1.appspot.com'
    }
  ]
})
export class AdminModule { }
