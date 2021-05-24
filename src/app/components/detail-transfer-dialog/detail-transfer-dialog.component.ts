import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ITransfer} from '../../ITransfer';

@Component({
  selector: 'app-detail-transfer-dialog',
  templateUrl: './detail-transfer-dialog.component.html',
  styleUrls: ['./detail-transfer-dialog.component.scss']
})
export class DetailTransferDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {transfer: ITransfer}) { }

  ngOnInit(): void {
  }

}
