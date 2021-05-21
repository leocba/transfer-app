import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ITransfer} from '../../ITransfer';

@Component({
  selector: 'app-edit-transfer-dialog',
  templateUrl: './edit-transfer-dialog.component.html',
  styleUrls: ['./edit-transfer-dialog.component.scss']
})
export class EditTransferDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {transfer: ITransfer}) { }

  ngOnInit(): void {
  }

}
