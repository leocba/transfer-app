import { ComponentFixture, TestBed } from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';
import { EditTransferComponent } from './edit-transfer.component';
import {FormsModule} from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import {LOCALE_ID} from '@angular/core';
import {provideMockStore} from '@ngrx/store/testing';
import {initialState} from '../../utils/initialState';

describe('EditTransferComponent', () => {
  let component: EditTransferComponent;
  let fixture: ComponentFixture<EditTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTransferComponent ],
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        BrowserAnimationsModule,
        CurrencyMaskModule,
        FormsModule],
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
