import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { RequestsService } from 'src/app/core/services/requests/requests.service';
import { environment } from 'src/environments/environment';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent],
      imports: [
        PipesModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
      providers: [
        RequestsService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
