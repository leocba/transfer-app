import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AddTransferComponent } from './add-transfer.component';
import {MockStore, provideMockStore} from '@ngrx/store/testing';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';

let store$: MockStore;

import {FormsModule} from '@angular/forms';
import {LOCALE_ID} from '@angular/core';
import {initialState} from '../../utils/initialState';

describe('AddTransferComponent', () => {
  let component: AddTransferComponent;
  let fixture: ComponentFixture<AddTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTransferComponent ],
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        BrowserAnimationsModule,
        CurrencyMaskModule,
        FormsModule
      ],
      providers: [
        {provide: LOCALE_ID, useValue: 'de-DE'},
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
        },
        {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
        provideMockStore(initialState)
      ]
    })
    .compileComponents();
    store$ = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
