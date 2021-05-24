import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';

import {ITransfer} from '../../ITransfer';
import {TransferService} from '../../services/transfer.service';
import {Store} from '@ngrx/store';

import {DeleteTransfer} from '../../store/actions/transfers.action';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Observable, Subscription} from 'rxjs';
import {getAllTransfers, getLoading, getTransfersError} from '../../store/reducers';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {AddTransferDialogComponent} from '../add-transfer-dialog/add-transfer-dialog.component';
import {EditTransferDialogComponent} from '../edit-transfer-dialog/edit-transfer-dialog.component';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-transfers-list',
  templateUrl: './transfers-list.component.html',
  styleUrls: ['./transfers-list.component.scss']
})

export class TransfersListComponent implements OnInit {
  @Input() list?: ITransfer[];
  @ViewChild(MatSort) sort: MatSort;

  subscription: Subscription = new Subscription();
  transfers$: Observable<ITransfer[]>;
  transfers: ITransfer[];
  transferError: HttpErrorResponse;
  loading$: Observable<boolean>;

  displayedColumns: string[] = ['accountHolder', 'amount', 'date', 'actions'];
  dataSource: MatTableDataSource<ITransfer>;

  dialogOptions = {
    width: '350px',
    maxWidth: '80vh'
  };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateTableColumns(window.innerWidth);
  }

  updateTableColumns(innerWidth: number) {
    if (innerWidth > 1200) {
      this.displayedColumns = ['id', 'accountHolder', 'IBAN', 'amount', 'date', 'note', 'actions'];
    } else if (innerWidth > 992) {
      this.displayedColumns = ['accountHolder', 'IBAN', 'amount', 'date', 'note', 'actions'];
    } else if (innerWidth > 768) {
      this.displayedColumns = ['accountHolder', 'IBAN', 'amount', 'date', 'actions'];
    } else {
      this.displayedColumns = ['accountHolder', 'amount', 'date', 'actions'];
    }
  }

  constructor(
    private transferService: TransferService,
    private store: Store,
    public dialog: MatDialog
  ) {
    this.transfers$ = this.store.select(getAllTransfers);
    this.loading$ = this.store.select(getLoading);
    // this.subscription.add(this.store.select(getAllTransfers).subscribe(value => {
    //   this.transfers = value;
    // }));
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new DeleteTransfer(id));
      }
    });
  }

  openEditDialog(transfer: ITransfer) {
    this.dialog.open(EditTransferDialogComponent, {
      ...this.dialogOptions,
      data: {transfer}
    });
  }

  openAddDialog() {
    this.dialog.open(AddTransferDialogComponent, this.dialogOptions);
  }

  ngOnInit() {
    this.subscription.add(this.store.select(getAllTransfers).subscribe(transfers => {
      this.dataSource = new MatTableDataSource(transfers);
      this.dataSource.sort = this.sort;

      this.dataSource.filterPredicate = (data: ITransfer, filter: string) => {
        return data.accountHolder.toLowerCase().indexOf(filter) !== -1 || data.note.toLowerCase().indexOf(filter) !== -1;
      };
    }));

    // this.transfers$.subscribe((transfers) => {
    //   this.dataSource = new MatTableDataSource(transfers);
    //   this.dataSource.sort = this.sort;
    //
    //   this.dataSource.filterPredicate = (data: ITransfer, filter: string) => {
    //     return data.accountHolder.toLowerCase().indexOf(filter) !== -1 || data.note.toLowerCase().indexOf(filter) !== -1;
    //   };
    // });
    this.updateTableColumns(window.innerWidth);

    this.subscription.add(this.store.select(getTransfersError).subscribe(value => {
      this.transferError = value;
    }));
  }

  sortData(sort: Sort) {
    this.transfers$.subscribe((transfers) => {
      this.dataSource = new MatTableDataSource(transfers);

      if (!sort.active || sort.direction === '') {
        this.dataSource.sort = this.sort;
        return;
      }

      const isAsc = sort.direction === 'asc';

      if (sort.active === 'date') {
        this.dataSource = new MatTableDataSource([...transfers].sort((a, b) => {
          if (isAsc) {
            // @ts-ignore
            return new Date(a.date) - new Date(b.date);
          } else {
            // @ts-ignore
            return new Date(b.date) - new Date(a.date);
          }
        }));
      }

      if (sort.active === 'amount') {
        this.dataSource = new MatTableDataSource([...transfers].sort((a, b) => {
          return (a.amount < b.amount ? -1 : 1) * (isAsc ? 1 : -1);
        }));
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
