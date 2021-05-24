import {Component, Input, OnInit} from '@angular/core';
import {ITransfer} from '../../ITransfer';

@Component({
  selector: 'app-detail-transfer',
  templateUrl: './detail-transfer.component.html',
  styleUrls: ['./detail-transfer.component.scss']
})
export class DetailTransferComponent implements OnInit {

  @Input() data: ITransfer;

  constructor() { }

  ngOnInit(): void {
  }

}
