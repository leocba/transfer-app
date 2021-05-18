import { Component, OnInit } from '@angular/core';
import {ITransfer} from '../../ITransfer';
import {CreateNewTransfer} from '../../store/actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-add-transfer',
  templateUrl: './add-transfer.component.html',
  styleUrls: ['./add-transfer.component.scss']
})
export class AddTransferComponent implements OnInit {

  transfer: ITransfer = {
    id: 1,
    accountHolder: '',
    IBAN: '',
    amount: 0,
    date: new Date(),
    note: ''
  };

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data:ITransfer = {
      id: this.transfer.id,
      accountHolder: this.transfer.accountHolder,
      IBAN: this.transfer.IBAN,
      amount: this.transfer.amount,
      date: this.transfer.date,
      note: this.transfer.note
    };

    this.store.dispatch(new CreateNewTransfer(data));

  //   this.tutorialService.create(data)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.submitted = true;
  //       },
  //       error => {
  //         console.log(error);
  //       });
  }

}
