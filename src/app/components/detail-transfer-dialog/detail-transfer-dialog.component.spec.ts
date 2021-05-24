import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTransferDialogComponent } from './detail-transfer-dialog.component';
import {DetailTransferComponent} from '../detail-transfer/detail-transfer.component';

import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {AngularIbanModule} from 'angular-iban';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

describe('DetailTransferDialogComponent', () => {
  let component: DetailTransferDialogComponent;
  let fixture: ComponentFixture<DetailTransferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        AngularIbanModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule
      ],
      declarations: [
        DetailTransferDialogComponent,
        DetailTransferComponent
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTransferDialogComponent);
    component = fixture.componentInstance;
    component.data =  {
      transfer: {
        id: '1fee3cde-a656-4f9b-9bac-a4dd5008f4fa',
        accountHolder: 'Penelope Berry',
        IBAN: 'DE63500105173833675741',
        amount: 100.99,
        date: new Date(),
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
