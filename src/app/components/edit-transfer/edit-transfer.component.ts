import {Component, Input, OnInit} from '@angular/core';
import {ITransfer} from '../../ITransfer';
import {Store} from '@ngrx/store';
import {UpdateTransfer} from '../../store/actions';

@Component({
  selector: 'app-transfer-details',
  templateUrl: './edit-transfer.component.html',
  styleUrls: ['./edit-transfer.component.scss']
})
export class EditTransferComponent implements OnInit {

  @Input() data: ITransfer;

  today = new Date();
  transfer: ITransfer;

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.transfer = {...this.data};
  }

  save(): void {
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
