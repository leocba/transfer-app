import { Component, Input, OnInit } from '@angular/core';
import {ITransfer} from '../../ITransfer';
import {Store} from '@ngrx/store';
import {CreateNewTransfer, UpdateTransfer} from '../../store/actions';

@Component({
  selector: 'app-transfer-details',
  templateUrl: './transfer-details.component.html',
  styleUrls: ['./transfer-details.component.scss']
})
export class TransferDetailsComponent implements OnInit {

  @Input() data: ITransfer;

  today = new Date();
  transfer: ITransfer;

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.transfer = { ...this.data };
  }

  saveTutorial(): void {
    const data: ITransfer = {
      id: this.transfer.id,
      accountHolder: this.transfer.accountHolder,
      IBAN: this.transfer.IBAN,
      amount: this.transfer.amount,
      date: this.transfer.date,
      note: this.transfer.note
    };

    this.store.dispatch(new UpdateTransfer(data));
  }

}
