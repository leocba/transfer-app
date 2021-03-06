import {Component, OnInit} from '@angular/core';
import {LoadTransfers} from './store/actions';
import {ITransfer} from './ITransfer';
import {TransferService} from './services/transfer.service';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'transfer-app';
  transfers: ITransfer[];

  constructor(
    private transferService: TransferService,
    private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadTransfers());
  }
}
