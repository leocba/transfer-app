import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { EditTransferDialogComponent } from './edit-transfer-dialog.component';
import { EditTransferComponent } from '../edit-transfer/edit-transfer.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule} from '@angular/forms';
import {LOCALE_ID} from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from '@angular/material-moment-adapter';
import {provideMockStore} from '@ngrx/store/testing';
import {initialState} from '../../utils/initialState';

describe('EditTransferDialogComponent', () => {
  let component: EditTransferDialogComponent;
  let fixture: ComponentFixture<EditTransferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EditTransferDialogComponent,
        EditTransferComponent
      ],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        CurrencyMaskModule,
        MatDatepickerModule,
        MatDialogModule,
        FormsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
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
    fixture = TestBed.createComponent(EditTransferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
