import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AngularIbanModule} from 'angular-iban';
import { DetailTransferComponent } from './detail-transfer.component';

import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

describe('DetailTransferComponent', () => {
  let component: DetailTransferComponent;
  let fixture: ComponentFixture<DetailTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularIbanModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule
      ],
      declarations: [ DetailTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTransferComponent);
    component = fixture.componentInstance;
    component.data =  {
      id: '1fee3cde-a656-4f9b-9bac-a4dd5008f4fa',
      accountHolder: 'Penelope Berry',
      IBAN: 'DE63500105173833675741',
      amount: 100.99,
      date: new Date(),
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
