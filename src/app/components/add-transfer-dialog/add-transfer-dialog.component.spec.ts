import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransferDialogComponent } from './add-transfer-dialog.component';
import {AddTransferComponent} from '../add-transfer/add-transfer.component';

import {provideMockStore} from '@ngrx/store/testing';
import {FormsModule} from '@angular/forms';
import {initialState} from '../../utils/initialState';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {LOCALE_ID} from '@angular/core';

describe('AddTransferDialogComponent', () => {
  let component: AddTransferDialogComponent;
  let fixture: ComponentFixture<AddTransferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddTransferDialogComponent,
        AddTransferComponent
      ],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        CurrencyMaskModule,
        MatDatepickerModule,
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
