import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './core/layout/components/components.module';
import { FooterComponent } from './core/layout/components/footer/footer.component';
import { NavComponent } from './core/layout/components/nav/nav.component';

// firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { UiComponentsModule } from './core/layout/ui-components/ui-components.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponentsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    UiComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
