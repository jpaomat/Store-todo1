import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { environment } from 'src/environments/environment';

import { KardexComponent } from './kardex.component';

describe('KardexComponent', () => {
  let component: KardexComponent;
  let fixture: ComponentFixture<KardexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KardexComponent ],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        PipesModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.showButtonsTable(2, 'inventory');
    expect(component).toBeTruthy();
  });
});
